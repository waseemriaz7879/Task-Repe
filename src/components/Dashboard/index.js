import React from 'react';
import Genre from '../genre/Genre';
import Movies from '../movies/Movies';
import AddNewMovieModal from '../Modal/AddNewMovieModal';
export default function Dashboard() {
  return (
    <div className="DashBoard">
      <div className="App d-flex">
        <div className="container my-3 ">
          <div className="row">
            <div
              className="col-3"
              style={{ marginTop: '50px', padding: '20px' }}
            >
              <AddNewMovieModal />
              <Genre />
            </div>
            <div className="col-6">
              <Movies />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
