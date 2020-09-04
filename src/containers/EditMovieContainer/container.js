import React from "react";
import { useHistory } from "react-router";
import EditMovie from "../EditMovie/container";
import { fetchEditMovie } from "../App/actions";
import { connect } from "react-redux";

const EditMovieContainer = ({
  moviesToRender,
  movieToShowDescription,
  fetchEditMovie,
}) => {
  const history = useHistory();
  const movie = moviesToRender[movieToShowDescription];

  const handleSubmit = (movieId, event, values) => {
    event.preventDefault();

    const { title, director, posterUrl, genres, description } = values;
    fetchEditMovie(movieId, {
      title,
      director,
      posterUrl,
      genres: typeof genres === "string" ? genres.split(",") : genres,
      description,
    });
    history.push(`/movies/${movieId}`);
  };

  const { title, posterUrl, director, genres, description } = movie;
  return (
    <EditMovie
      moviesToRender={moviesToRender}
      movieToShowDescription={movieToShowDescription}
      description={description}
      director={director}
      genres={genres}
      posterUrl={posterUrl}
      title={title}
      handleSubmit={handleSubmit}
      initialValues={{
        description: movie.description,
        title: movie.title,
        genres: movie.genres,
        director: movie.director,
        posterUrl: movie.posterUrl,
      }}
    />
  );
};

const mapDispatchToProps = {
  fetchEditMovie,
};

const withConnect = connect(null, mapDispatchToProps);

export default withConnect(EditMovieContainer);
