import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserAuthContext } from '../context/UserContext';
const SignInRoute = ({ children }) => {
  const [isAuthenticated] = useUserAuthContext();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return children;
};

export default SignInRoute;
