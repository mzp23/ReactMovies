import React from "react";
import { useHistory } from "react-router";
import EditMovie from "../EditMovie/container";
import { fetchEditMovie } from "../App/actions";
import { connect } from "react-redux";
import { getMovieToRender } from "../App/selectors";

const EditMovieContainer = ({
  fetchEditMovie,
  movieToRender,
}) => {
  const history = useHistory();

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

  const { title, posterUrl, director, genres, description } = movieToRender;
  return (
    <EditMovie
      handleSubmit={handleSubmit}
      initialValues={{
        description,
        title,
        genres,
        director,
        posterUrl,
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  movieToRender: getMovieToRender(state),
});

const mapDispatchToProps = {
  fetchEditMovie,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(EditMovieContainer);
