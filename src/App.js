import './App.css';
import React from 'react';
// import { useMoviesDataContext } from './context/MoviesDataContext';
import Genre from './components/genre/Genre';
import Movies from './components/movies/Movies';
import { Button } from 'react-bootstrap';
import AddNewMovieModal from './components/Modal/AddNewMovieModal';
function App() {
  return (
    <div className="App d-flex">
      <div className="container my-3 ">
        <div className="row">
          <div className="col-3" style={{ marginTop: '50px', padding: '20px' }}>
            <AddNewMovieModal />
            <Genre />
          </div>
          <div className="col-6">
            <Movies />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
