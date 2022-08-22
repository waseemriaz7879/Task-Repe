import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useMoviesDataContext } from '../../context/MoviesDataContext';
import { FormGroup } from 'react-bootstrap';
import uniqid from 'uniqid';

function AddNewMovieModal() {
  const [modalShow, setModalShow] = React.useState(false);
  const handleCloseModal = () => {
    setModalShow(false);
  };

  const [{ moviesData }, { handleMoviesDataChange }] = useMoviesDataContext();

  // const [value, setValue] = React.useState({
  //   movieName: '',
  //   movieGenre: '',
  //   movieRating: '',
  //   movieStock: '',
  // });
  const [movieName, setMovieName] = React.useState('');
  const [genreName, setGenreName] = React.useState('');
  const [movieRating, setMovieRating] = React.useState('');
  const [movieStock, setMovieStock] = React.useState('');

  const handleSaveMovie = () => {
    const movies = [...moviesData];
    movies.push({
      _id: uniqid(),
      title: movieName,
      genre: { name: genreName },
      dailyRentalRate: movieRating,
      numberInStock: movieStock,
    });
    handleMoviesDataChange(movies);
    console.log('save', movies);
    setModalShow(false);
  };
  console.log(genreName);
  return (
    <>
      <Button
        variant="primary"
        className="mb-4"
        onClick={() => setModalShow(true)}
      >
        Add New Movie
      </Button>
      <Modal
        show={modalShow}
        onHide={handleCloseModal}
        //   {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add new Movie
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSaveMovie}>
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
                      onChange={e => setMovieName(e.target.value)}
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
              <Button onClick={handleSaveMovie}>Save</Button>
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={handleCloseModal}>Close</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default AddNewMovieModal;
