import React from 'react';

const CreateUserAuthStateContext = React.createContext(undefined);
const CreateUserAuthDispatchContext = React.createContext(undefined);

function UserAuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleSetIsAuthenticated = isAuthenticated => {
    setIsAuthenticated(isAuthenticated);
  };

  return (
    <CreateUserAuthStateContext.Provider value={isAuthenticated}>
      <CreateUserAuthDispatchContext.Provider
        value={{ handleSetIsAuthenticated }}
      >
        {children}
      </CreateUserAuthDispatchContext.Provider>
    </CreateUserAuthStateContext.Provider>
  );
}

const useCreateUserAuthStateContext = () => {
  const context = React.useContext(CreateUserAuthStateContext);
  if (context === undefined) {
    throw Error('CreateUserAuthStateContext not working');
  }
  return context;
};

const useCreateUserAuthDispatchContext = () => {
  const context = React.useContext(CreateUserAuthDispatchContext);
  if (context === undefined) {
    throw Error('CreateUserAuthDispatchContext not working ');
  }
  return context;
};

const useUserAuthContext = () => {
  return [useCreateUserAuthStateContext(), useCreateUserAuthDispatchContext()];
};

export { UserAuthContextProvider, useUserAuthContext };
