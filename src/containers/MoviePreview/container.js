import React, { useEffect } from "react";
import { connect } from "react-redux";
import MoviePreview from "../../components/MoviePreview/component";

import { fetchMovies, handleTitleToProps } from "../App/actions";
import { useHistory } from "react-router-dom";
import { getIsLoaded, getMovies } from "../App/selectors";

const MoviePreviewContainer = ({
  moviesToRender,
  likeTitle,
  fetchMovies,
  handleTitleToProps,
  isLoaded,
}) => {
  const history = useHistory();
  useEffect(() => {
    if (!isLoaded) {
      fetchMovies();
    }
  }, [fetchMovies, isLoaded]);

  const handleTitle = (movieId) => {
    const film = moviesToRender.find((item) => item.id === movieId);
    handleTitleToProps({ movieToShowDescription: film.id });
    history.push(`/movies/${film.id}`);
  };

  return (
    <>
      {moviesToRender &&
        moviesToRender.map((el) => {
          return (
            <MoviePreview
              key={el.id}
              stars={el.stars}
              likes={el.likes}
              title={el.title}
              poster={el.posterUrl}
              handleTitle={handleTitle}
              movieId={el.id}
              likeTitle={likeTitle}
            />
          );
        })}
    </>
  );
};
const mapStateToProps = (state) => ({
  moviesToRender: getMovies(state),
  isLoaded: getIsLoaded(state),
});

const mapDispatchToProps = {
  fetchMovies,
  handleTitleToProps,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(MoviePreviewContainer);
