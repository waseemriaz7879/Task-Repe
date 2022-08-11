import './App.css';
import React from 'react';
// import { useMoviesDataContext } from './context/MoviesDataContext';
import Genre from './components/genre/Genre';
import Movies from './components/movies/Movies';
function App() {
  return (
    <div className="App">
      <div className="container my-3">
        <div className="row">
          <div className="col-3">
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
