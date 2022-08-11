import ListGroup from 'react-bootstrap/ListGroup';
import genreData from '../../data/genres.json';
import { useActiveGenreContext } from '../../context/ActiveGenreContext';
import { Tab } from 'react-bootstrap';

function ActiveExample() {
  const [activeGenre, { handleActiveGenreChange }] = useActiveGenreContext();
  console.log(activeGenre);
  const handleSelectGenre = genre => {
    handleActiveGenreChange({
      id: genre._id,
      name: genre.name,
    });
  };
  const handleShowAllMovies = () =>
    handleActiveGenreChange({
      id: '0',
      name: 'All Movies',
    });

  return (
    <Tab.Container defaultActiveKey={activeGenre.name}>
      <ListGroup as="ul">
        <ListGroup.Item
          as="li"
          action
          style={{ cursor: 'pointer' }}
          href="All Movies"
          onClick={handleShowAllMovies}
        >
          All Movies
        </ListGroup.Item>
        {genreData.map(genre => {
          return (
            <ListGroup.Item
              key={genre._id}
              as="li"
              style={{ cursor: 'pointer' }}
              onClick={() => handleSelectGenre(genre)}
              action
              href={genre.name}
            >
              {genre.name}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Tab.Container>
  );
}

export default ActiveExample;
