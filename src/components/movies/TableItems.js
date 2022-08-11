import React from 'react';
import { Button } from 'react-bootstrap';
export default function TableItems({ movie, handleOnClickDelete }) {
  return (
    <>
      <tr>
        <td>{movie._id}</td>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>{movie.numberInStock}</td>
        <td>
          <Button
            className="btn btn-danger"
            onClick={() => handleOnClickDelete(movie._id)}
          >
            Delete
          </Button>
        </td>
      </tr>
    </>
  );
}
