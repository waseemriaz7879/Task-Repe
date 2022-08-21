import React from 'react';
import MoviesTable from './MovieTable';
import { useMoviesDataContext } from '../../context/MoviesDataContext';
import { useActiveGenreContext } from '../../context/ActiveGenreContext';
import PaginationComponent from '../Pagination/PagintaionComponent';
import ConfirmationModal from '../Modal/ConfirmationModal';
import SearchBar from '../Search/SearchBar';
import UpdateMovieModal from '../Modal/UpdateMoviemodal';
export default function Movies() {
  //states
  const [activeGenre] = useActiveGenreContext();
  const [{ moviesData }, { handleMoviesDataChange }] = useMoviesDataContext();
  // const [movies, setMovies] = React.useState(moviesData);
  const [orderBy, setOrderBy] = React.useState('asc');
  const [moviesPerPage] = React.useState(4);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [modalShow, setModalShow] = React.useState({
    isVisible: false,
    id: null,
  });
  // const { showAddNewMovieModal, setShowAddNewMovieModal } = React.useState({
  //   isVisible: false,
  //   id: null,
  // });
  const [isChecked, setIsChecked] = React.useState(false);
  const [searchInput, setSearchInput] = React.useState('');
  const [openUpdateModal, setOpenUpdateModal] = React.useState(false);
  const [editAbleData, setEditAbleData] = React.useState('');

  /// functions

  //Selected Moviesby genre
  const selectedMovies = moviesData.filter(movie => {
    if (activeGenre.id === '0') {
      return movie.genre._id !== activeGenre.id;
    }
    return movie.genre._id === activeGenre.id;
  });

  //sorting
  const sorting = col => {
    orderBy === 'asc' ? setOrderBy('desc') : setOrderBy('asc');

    if (col === 'genre') {
      const sorted = [...moviesData].sort((a, b) => {
        if (orderBy === 'asc') {
          return a.genre.name > b.genre.name ? 1 : -1;
        } else if (orderBy === 'desc') {
          return a.genre.name < b.genre.name ? 1 : -1;
        }
      });
      handleMoviesDataChange(sorted);
      return;
    }

    const sorted = [...moviesData].sort((a, b) => {
      if (orderBy === 'asc') {
        return a[col] > b[col] ? 1 : -1;
      }
      return a[col] < b[col] ? 1 : -1;
    });
    handleMoviesDataChange(sorted);
  };

  //pagination
  const startIndex = currentPage * moviesPerPage - moviesPerPage;
  const endIndex = startIndex + moviesPerPage - 1;
  const totalMovies = selectedMovies.length;
  // console.log(totalMovies);

  //get searched movies
  const searchedMovies = selectedMovies.filter(movie => {
    return movie.title.toLowerCase().startsWith(searchInput.toLowerCase());
  });

  const moviesToShow = searchedMovies.filter((_movie, index) => {
    if (index >= startIndex && index <= endIndex) {
      return true;
    }
    return false;
  });

  const handleCurrentPageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  //delete Modal
  const deleteMovie = id => {
    handleMoviesDataChange(
      moviesData.filter(movie => {
        return movie._id !== id;
      })
    );
  };

  const handleOnClickDelete = id => {
    if (isChecked) {
      deleteMovie(id);
      return;
    }
    // console.log(id);
    setModalShow({ isVisible: true, id: id });
    // console.log(isOpen);
  };
  const handleCloseModal = () => {
    setModalShow({ isVisible: false, id: null });
    setIsChecked(false);
  };

  //delete Function

  const handleConfirmDelete = () => {
    // console.log(isChecked);
    deleteMovie(modalShow.id);
    setModalShow({
      isVisible: false,
    });
  };
  // checkbox
  const handleCheckBox = e => {
    if (e.target.checked) {
      setIsChecked(true);
    }
  };
  // Search

  const handleSearchBar = e => {
    setSearchInput(e.target.value);
    console.log(searchInput);
  };
  //edit Movie

  const handleEditMovie = id => {
    setOpenUpdateModal(true);
    setEditAbleData(
      moviesData.filter(movie => {
        return movie._id === id;
      })
    );
  };

  return (
    <div>
      <h1>Movie Table</h1>
      <SearchBar handleSearchBar={handleSearchBar} />
      <MoviesTable
        movies={moviesToShow}
        sorting={sorting}
        handleOnClickDelete={handleOnClickDelete}
        orderBy={orderBy}
        handleEditMovie={handleEditMovie}
      />

      <PaginationComponent
        totalItems={totalMovies}
        currentPage={currentPage}
        itemsPerPage={moviesPerPage}
        handleCurrentPageChange={handleCurrentPageChange}
      />
      <ConfirmationModal
        modalShow={modalShow}
        handleCloseModal={handleCloseModal}
        handleConfirmDelete={handleConfirmDelete}
        handleCheckBox={handleCheckBox}
      />
      <UpdateMovieModal
        openUpdateModal={openUpdateModal}
        setOpenUpdateModal={setOpenUpdateModal}
        editMovieData={editAbleData}
      />
    </div>
  );
}
