import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useMoviesDataContext } from '../../context/MoviesDataContext';
import { FormGroup } from 'react-bootstrap';
// import uniqid from 'uniqid';

function UpdateMovieModal({
  openUpdateModal,
  setOpenUpdateModal,
  clearEditData,
  editAbleData,
}) {
  const [movieName, setMovieName] = React.useState('');
  const [genreName, setGenreName] = React.useState('');
  const [movieRating, setMovieRating] = React.useState('');
  const [movieStock, setMovieStock] = React.useState('');
  const [currentMovie, setCurrentMovie] = React.useState();
  const [{ moviesData }, { handleMoviesDataChange }] = useMoviesDataContext();
  console.log(currentMovie);
  React.useEffect(() => {
    if (openUpdateModal === true) {
      setCurrentMovie(editAbleData);
    }
  }, [openUpdateModal === true]);
  React.useEffect(() => {
    if (currentMovie) {
      setMovieName(currentMovie[0].title);
      setGenreName(currentMovie[0].genre.name);
      setMovieRating(currentMovie[0].dailyRentalRate);
      setMovieStock(currentMovie[0].numberInStock);
      // console.log(editAbleData[0].genre.name);
    }
  }, [editAbleData]);

  const handleCloseModal = () => {
    clearEditData();
    setOpenUpdateModal(false);
  };

  const handleEditDataSave = e => {
    e.preventDefault();

    // const updatedMovies = [...moviesData];
    // const index = updatedMovies.findIndex(el => el._id === editAbleData._id);
    // updatedMovies[index] = {
    //   ...updatedMovies[index],
    //   title: movieName,
    // };

    const updatedMovie = moviesData.map(data => {
      return data._id === currentMovie._id ? currentMovie : data;
    });
    console.log(updatedMovie);
    handleMoviesDataChange(updatedMovie);
    console.log('save is working');
    setOpenUpdateModal(false);
  };

  return (
    <>
      <Modal
        show={openUpdateModal}
        onHide={handleCloseModal}
        //   {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Movie
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleEditDataSave}>
            <FormGroup>
              <div className="row">
                <div className="col-6">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Movie Name"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Movie Name"
                      value={movieName}
                      onChange={e =>
                        setCurrentMovie({
                          ...currentMovie,
                          title: e.target.value,
                        })
                      }
                    />
                  </FloatingLabel>
                </div>
                <div className="col-6">
                  {' '}
                  <FloatingLabel
                    controlId="floatingSelect"
                    label="Works with selects"
                  >
                    <Form.Select
                      aria-label="Floating label select example"
                      value={genreName}
                      onChange={e => setGenreName(e.target.value)}
                    >
                      <option>Select Genre</option>
                      <option value="Action">Action</option>
                      <option value="Comedy">Comedy</option>
                      <option value="Thriller">Thriller</option>
                    </Form.Select>
                  </FloatingLabel>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Enter Rating"
                    className="mb-3"
                  >
                    <Form.Control
                      type="number"
                      placeholder="rating"
                      value={movieRating}
                      onChange={e => setMovieRating(e.target.value)}
                    />
                  </FloatingLabel>
                </div>
                <div className="col-6">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Movie Stock"
                    className="mb-3"
                  >
                    <Form.Control
                      type="number"
                      placeholder="Movie stock"
                      value={movieStock}
                      onChange={e => setMovieStock(e.target.value)}
                    />
                  </FloatingLabel>
                </div>
              </div>
              <Button type="submit">Update</Button>
            </FormGroup>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default UpdateMovieModal;
