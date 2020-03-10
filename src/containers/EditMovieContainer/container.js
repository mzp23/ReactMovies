import React, { Component } from "react";
import EditMovie from "../EditMovie/container";
import {fetchEditMovie, fetchMovieById, handleEditMovieInfo} from "../App/actions";
import { connect } from "react-redux";

class EditMovieContainer extends Component {
  movie = this.props.moviesToRender[this.props.movieToShowDescription];
  componentDidMount() {
    this.props.handleEditMovieInfo({
      title: this.movie.title,
      posterUrl: this.movie.posterUrl,
      director: this.movie.director,
      genres: this.movie.genres.join(", "),
      description: this.movie.description
    });
  }

  handleSubmit = (movieId, event, values) => {
    event.preventDefault();
    const { title, director, posterUrl, genres, description } = values;
    this.props.fetchEditMovie(movieId, {
     title,
     director,
     posterUrl,
     genres:  typeof genres === "string" ? genres.split(",") : genres,
     description
   });
   this.props.history.push(`/movies/${movieId}`);
  };

  render() {
    const { title, posterUrl, director, genres, description } = this.movie;
    return (
      <EditMovie
        description={description}
        director={director}
        genres={genres}
        posterUrl={posterUrl}
        title={title}
        handleSubmit={this.handleSubmit}
        {...this.props}
        initialValues={{
            description: this.movie.description,
            title: this.movie.title,
            genres: this.movie.genres,
            director: this.movie.director,
            posterUrl: this.movie.posterUrl,
       }}
      />
    );
  }
}
const mapStateToProps = () => ({});

const mapDispatchToProps = {
  fetchEditMovie,
  fetchMovieById,
  handleEditMovieInfo
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(EditMovieContainer);
