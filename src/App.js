import './App.css';
import React from 'react';
// import { useMoviesDataContext } from './context/MoviesDataContext';
import Genre from './components/genre/Genre';
import Movies from './components/movies/Movies';
import AddNewMovieModal from './components/Modal/AddNewMovieModal';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import SignInPage from './pages/SigninPage';
import SignInRoute from '../src/routes/SignInRoute';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignInPage />} />

        <Route
          path="/dashboard"
          element={
            <SignInRoute>
              <Dashboard />
            </SignInRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
