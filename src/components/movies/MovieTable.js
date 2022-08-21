import Table from 'react-bootstrap/Table';
import TableItems from './TableItems';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
function MoviesTable({
  movies,
  sorting,
  handleOnClickDelete,
  orderBy,
  handleEditMovie,
}) {
  const renderTooltip = props => (
    <Tooltip id="button-tooltip" {...props}>
      Click to Change Order {orderBy}
    </Tooltip>
  );
  return (
    <Table>
      <thead>
        <tr>
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 100 }}
            overlay={renderTooltip}
          >
            <th
              onClick={() => {
                sorting('_id');
              }}
            >
              {' '}
              #
            </th>
          </OverlayTrigger>

          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 100 }}
            overlay={renderTooltip}
          >
            <th
              onClick={() => {
                sorting('title');
              }}
            >
              Title
            </th>
          </OverlayTrigger>
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
              handleEditMovie={handleEditMovie}
            />
          );
        })}
      </tbody>
    </Table>
  );
}

export default MoviesTable;
