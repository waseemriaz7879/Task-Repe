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
  const [title, setTitle] = React.useState('');
  const [genreName, setGenreName] = React.useState('');
  const [movieRating, setMovieRating] = React.useState('');
  const [movieStock, setMovieStock] = React.useState('');
  const [{ moviesData }, { handleMoviesDataChange }] = useMoviesDataContext();
  const [currentMovie, setCurrentMovie] = React.useState();

  React.useEffect(() => {
    if (openUpdateModal) {
      setCurrentMovie(editAbleData);
    }
  }, [openUpdateModal === true]);

  React.useEffect(() => {
    if (currentMovie) {
      setTitle(currentMovie.title);
    }
  });

  const handleCloseModal = () => {
    clearEditData();
    setOpenUpdateModal(false);
  };

  const handleEditDataSave = e => {
    e.preventDefault();

    const updatedMovie = moviesData.map(data => {
      return data._id === currentMovie._id ? currentMovie : data;
    });
    handleMoviesDataChange(updatedMovie);
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
                      value={title}
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
