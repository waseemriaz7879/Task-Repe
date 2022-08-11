import Table from 'react-bootstrap/Table';
import TableItems from './TableItems';
function MoviesTable({ movies, sorting, handleOnClickDelete }) {
  return (
    <Table>
      <thead>
        <tr>
          <th
            onClick={() => {
              sorting('_id');
            }}
          >
            #
          </th>
          <th
            onClick={() => {
              sorting('title');
            }}
          >
            Title
          </th>
          <th
            onClick={() => {
              sorting('genre');
            }}
          >
            Genre
          </th>
          <th
            onClick={() => {
              sorting('dailyRentalRate');
            }}
          >
            Rate
          </th>
          <th
            onClick={() => {
              sorting('numberInStock');
            }}
          >
            Stock
          </th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {movies.map(movie => {
          return (
            <TableItems
              movie={movie}
              handleOnClickDelete={handleOnClickDelete}
              key={movie._id}
            />
          );
        })}
      </tbody>
    </Table>
  );
}

export default MoviesTable;
