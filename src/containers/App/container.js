import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { findMovieIndex } from "../../helpers/helpers";
import MovieFullView from "../../components/MovieFullView/component";
import {
  loadMovies,
  resetSorting,
  handleSearch,
  handleTitleToProps,
  handleDeleteMovie,
  handleEditMovie,
  fetchMovies,
  fetchActors,
  fetchDeleteMovie,
} from "./actions";

import { movieShape } from "../../helpers/propTypeShapes";
import Movies from "../../components/Movies/component";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { Routes } from "../../constants";
import Login from "../Login/container";
import Register from "../Register/container";
import PageNotFound from "../../components/PageNotFound/component";
import ProtectedRoute from "../../Routes/ProtectedRoute";
import EditMovieContainer from "../EditMovieContainer/container";
import ActorContainer from "../ActorContainer/container";
import AddMovieContainer from "../AddNewMovieContainer/container";
import LanguageToggler from "../LanguageToggler/container";
import Navigation from "../../components/Navigation/component";

class App extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  resetFilters = () => {
    const { moviesToRender } = this.props;
    const movies = [...moviesToRender].sort((a, b) => a.id - b.id);
    this.props.resetSorting({
      moviesToRender: movies,
    });
  };

  handleSearchResult = (searchResult) => {
    this.props.handleSearch({ moviesToRender: searchResult });
  };

  handleTitle = async (movieId) => {
    const { handleTitleToProps, moviesToRender, fetchActors } = this.props;
    const [moviesToRenderIndex] = findMovieIndex(movieId, this.props);
    const { actorsIds } = moviesToRender[moviesToRenderIndex];
    handleTitleToProps({ movieToShowDescription: moviesToRenderIndex });
    await fetchActors(actorsIds);
    this.props.history.push(`/movies/${movieId}`);
  };

  handleDelete = async (movieId) => {
    const { history, fetchDeleteMovie } = this.props;
    await fetchDeleteMovie(movieId);
    history.push("/movies");
  };

  handleEdit = (movieId) => {
    const { history } = this.props;
    history.push(`/edit-movie/${movieId}`);
  };

  handleActor = (id) => {
    const { history } = this.props;
    history.push(`/actor/${id}`);
  };

  handleNewMovie = () => {
    const { history } = this.props;
    history.push("/add-movie");
  };

  render() {
    const {
      defaultMovies,
      movieToShowDescription,
      moviesToRender,
      actors,
      movieToRender,
    } = this.props;
    return (
      <>
        <LanguageToggler />
        <Navigation />
        <Switch>
          <Route exact path={Routes.LOGIN} component={Login} />
          <Route exact path={Routes.REGISTER} component={Register} />
          <Route
            exact
            path={Routes.EDIT_MOVIE}
            component={EditMovieContainer}
          />

          <ProtectedRoute exact path={Routes.HOMEPAGE} {...this.props}>
            <Redirect to={Routes.MOVIES} />
          </ProtectedRoute>
          <ProtectedRoute
            exact
            path={Routes.MOVIES}
            {...this.props}
            render={() => (
              <Movies
                handleTitle={this.handleTitle}
                resetFilters={this.resetFilters}
                handleNewMovie={this.handleNewMovie}
                handleSearchResult={this.handleSearchResult}
              />
            )}
          />
          <ProtectedRoute
            exact
            path={Routes.MOVIE}
            {...this.props}
            render={() => (
              <MovieFullView
                movies={defaultMovies}
                moviesToRender={moviesToRender}
                movieIDX={movieToShowDescription}
                movieToRender={movieToRender}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
                actors={actors}
                handleActor={this.handleActor}
              />
            )}
          />
          <ProtectedRoute
            exact
            path={Routes.ACTOR}
            component={ActorContainer}
          />
          <ProtectedRoute
            exact
            path={Routes.ADD_MOVIE}
            component={AddMovieContainer}
          />
          <Route path={"**"} component={PageNotFound} />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = ({ moviesReducer, loginReducer }) => ({
  moviesToRender: moviesReducer.moviesToRender,
  defaultMovies: moviesReducer.defaultMovies,
  movieToRender: moviesReducer.movieToRender,
  movieToShowDescription: moviesReducer.movieToShowDescription,
  actors: moviesReducer.actors,
  loading: moviesReducer.loading,
  user: loginReducer.user,
});

const mapDispatchToProps = {
  loadMovies,
  resetSorting,
  handleTitleToProps,
  handleDeleteMovie,
  handleEditMovie,
  fetchMovies,
  fetchActors,
  fetchDeleteMovie,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withConnect)(App);

App.propTypes = {
  defaultMovies: PropTypes.arrayOf(movieShape),
  moviesToRender: PropTypes.arrayOf(movieShape),
  resetSorting: PropTypes.func,
  handleSearch: PropTypes.func,
  handleTitleToProps: PropTypes.func,
};
