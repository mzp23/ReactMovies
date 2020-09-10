import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import MoviePreview from "../../components/MoviePreview/component";
import uuid from "uuid";

import { fetchMovies, handleTitleToProps } from "../App/actions";
import { useHistory } from "react-router-dom";

const MoviePreviewContainer = ({
  moviesToRender,
  likeTitle,
  fetchMovies,
  handleTitleToProps,
  isLoaded
}) => {
  const history = useHistory();

    useEffect(() => {
      if (!isLoaded) {
        fetchMovies();
      }
    }, [fetchMovies, isLoaded]);

  const handleTitle = async (movieId) => {
    const film = moviesToRender.findIndex((item) => item.id === movieId);
    handleTitleToProps({ movieToShowDescription: film });
    history.push(`/movies/${movieId}`);
  };

  return (
    <>
      {moviesToRender &&
        moviesToRender.map((el) => (
          <MoviePreview
            key={uuid()}
            stars={el.stars}
            likes={el.likes}
            title={el.title}
            poster={el.posterUrl}
            handleTitle={handleTitle}
            movieId={el.id}
            likeTitle={likeTitle}
          />
        ))}
    </>
  );
};
const mapStateToProps = ({ moviesReducer }) => ({
  moviesToRender: moviesReducer.moviesToRender,
  isLoaded: moviesReducer.isLoaded,
  sortedByLikes: moviesReducer.sortedByLikes,
  sortedByStars: moviesReducer.sortedByStars,
  resetSort: moviesReducer.resetSort,
});

const mapDispatchToProps = {
  fetchMovies,
  handleTitleToProps,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(MoviePreviewContainer);
