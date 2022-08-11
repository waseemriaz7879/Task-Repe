import React from 'react';

const CreateActiveGenreStateContext = React.createContext(undefined);
const CreateActiveGenreDispatchContext = React.createContext(undefined);

function ActiveGenreProvider({ children }) {
  const [activeGenre, setActiveGenre] = React.useState({
    id: '0',
    name: 'All Movies',
  });

  const handleActiveGenreChange = activeGenre => {
    setActiveGenre(activeGenre);
  };

  return (
    <CreateActiveGenreStateContext.Provider value={activeGenre}>
      <CreateActiveGenreDispatchContext.Provider
        value={{ handleActiveGenreChange }}
      >
        {children}
      </CreateActiveGenreDispatchContext.Provider>
    </CreateActiveGenreStateContext.Provider>
  );
}

const useCreateActiveGenreStateContext = () => {
  const context = React.useContext(CreateActiveGenreStateContext);
  if (context === undefined) {
    throw Error('CreateActiveGenreStateContext nahi haai');
  }

  return context;
};

const useCreateActiveGenreDispatchContext = () => {
  const context = React.useContext(CreateActiveGenreDispatchContext);
  if (context === undefined) {
    throw Error('CreateActiveGenreDispatchContext nahi haai');
  }

  return context;
};

const useActiveGenreContext = () => {
  return [
    useCreateActiveGenreStateContext(),
    useCreateActiveGenreDispatchContext(),
  ];
};

export { ActiveGenreProvider, useActiveGenreContext };
