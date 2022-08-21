import './App.css';
import React from 'react';
// import { useMoviesDataContext } from './context/MoviesDataContext';
import Genre from './components/genre/Genre';
import Movies from './components/movies/Movies';
import AddNewMovieModal from './components/Modal/AddNewMovieModal';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import SignInPage from './pages/SigninPage';
function App() {
  return (
    <>
      <Routes>
        <Route index path="/signin" element={<SignInPage />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
