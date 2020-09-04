import React from "react";
import { fetchAddNewMovie } from "./actions";
import { connect } from "react-redux";
import AddMovie from "../AddMovie/container";
import { fetchMovies } from "../App/actions";

const AddMovieContainer = ({ fetchAddNewMovie, history, fetchMovies }) => {
  const handleSubmit = async (event, values) => {
    event.preventDefault();
    const { title, director, posterUrl, genres, description } = values;
    await fetchAddNewMovie({
      title,
      director,
      posterUrl,
      genres: genres.split(","),
      description,
    });
    await fetchMovies();
    history.push(`/movies/`);
  };

  return <AddMovie handleSubmit={handleSubmit} history={history} />;
};

const mapDispatchToProps = {
  fetchAddNewMovie,
  fetchMovies,
};

const withConnect = connect(null, mapDispatchToProps);
export default withConnect(AddMovieContainer);
