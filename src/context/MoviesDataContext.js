import React from 'react';
import MoviesDataInJSON from '../data/movies.json';

const CreateMoviesDataStateContext = React.createContext(undefined);

const CreateMoviesDataDispatchContext = React.createContext(undefined);

function MoviesDataContextProvider({ children }) {
  const [moviesData, setMoviesData] = React.useState(MoviesDataInJSON);

  const handleMoviesDataChange = moviesData => {
    setMoviesData(moviesData);
  };
  return (
    <CreateMoviesDataStateContext.Provider
      value={{ moviesData, MoviesDataInJSON }}
    >
      <CreateMoviesDataDispatchContext.Provider
        value={{ handleMoviesDataChange }}
      >
        {children}
      </CreateMoviesDataDispatchContext.Provider>
    </CreateMoviesDataStateContext.Provider>
  );
}

const useCreateMoviesDataStateContext = () => {
  const context = React.useContext(CreateMoviesDataStateContext);
  if (context === undefined) {
    throw Error('useCreateMoviesDataStateContext is not working');
  }
  return context;
};
const useCreateMoviesDataDispatchContext = () => {
  const context = React.useContext(CreateMoviesDataDispatchContext);
  if (context === undefined) {
    throw Error('useCreateMoviesDataDispatchContext is not working');
  }
  return context;
};

const useMoviesDataContext = () => {
  return [
    useCreateMoviesDataStateContext(),
    useCreateMoviesDataDispatchContext(),
  ];
};
export { MoviesDataContextProvider, useMoviesDataContext };
