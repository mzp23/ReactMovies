import React, { Component } from "react";
import { fetchAddNewMovie } from "./actions";
import { connect } from "react-redux";
import AddMovie from "../AddMovie/container";
import { fetchMovies } from "../App/actions";

class AddMovieContainer extends Component {
  state = {
    title: "",
    posterUrl: "",
    director: "",
    genres: "",
    description: ""
  };

  handleSubmit = async (movieId, event, values) => {
    event.preventDefault();
    const { fetchAddNewMovie, history, fetchMovies } = this.props;
    const { title, director, posterUrl, genres, description } = values;
    await fetchAddNewMovie({
      title,
      director,
      posterUrl,
      genres: genres.split(","),
      description
    });
    await fetchMovies();
    history.push(`/movies/`);
  };

  render() {
    const { title, posterUrl, director, genres, description } = this.state;
    return (
      <AddMovie
        description={description}
        director={director}
        genres={genres}
        posterUrl={posterUrl}
        title={title}
        handleTitle={this.handleTitle}
        handlePoster={this.handlePoster}
        handleDirector={this.handleDirector}
        handleGenres={this.handleGenres}
        handleDescription={this.handleDescription}
        handleSubmit={this.handleSubmit}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  fetchAddNewMovie,
  fetchMovies
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default withConnect(AddMovieContainer);
