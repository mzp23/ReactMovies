import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {findMovieIndex, sortArr, updateElement} from "../../helpers/helpers";
import MovieFullView from "../../components/MovieFullView/component";
import {
    loadMovies, resetSorting, toggleSortByLikes, toggleSortByLStars,
    handleLike, handleStars, handleSearch, handleTitleToProps, handleDeleteMovie,
    handleEditMovie, handleUserLogOut
} from "./actions";
import {movieShape} from "../../helpers/propTypeShapes";
import Movies from "../../components/Movies/component";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import {Routes} from "../../constants";
import Login from "../Login/container";
import Register from "../Register/container";
import PageNotFound from "../../components/PageNotFound/component";
import ProtectedRoute from "../../Routes/ProtectedRoute";
import EditMovieContainer from "../EditMovieContainer/container";
import ActorContainer from '../ActorContainer/container';
class App extends Component{

    componentDidMount() {
        this.getData();
    }

    getData() {
        const {loadMovies} = this.props;
        fetch('http://localhost:3000/moviesData.json',
            {
                headers : {
                     'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
            )
            .then(res => res.json())
            .then(res => {
                loadMovies({
                    moviesToRender: res.movies,
                    defaultMovies: res.movies,
                    actors: res.actors,
                });
            });
    };

    sortMoviesByLikes = () => {
        const {moviesToRender, sortedByLikes} = this.props;
        const movies = [...moviesToRender].sort((a, b) => sortArr(a.likes, b.likes, sortedByLikes));
        this.props.toggleSortByLikes({
            sortedByLikes: !sortedByLikes,
            moviesToRender:movies});
    };

    sortMoviesByStars = () => {
        const {moviesToRender, sortedByStars} = this.props;
        const movies = [...moviesToRender].sort((a, b) => sortArr(a.stars, b.stars, sortedByStars));
        this.props.toggleSortByLStars({
            sortedByStars: !sortedByStars,
            moviesToRender:movies});
    };


    resetFilters = () => {
        const {moviesToRender} = this.props;
        const movies = [...moviesToRender].sort((a, b) => a.id - b.id);
      this.props.resetSorting({
          moviesToRender:movies});
    };

    handleStar = (movieId, stars) => {
        const {handleStars} = this.props;
        const [moviesToRenderIndex,defaultMoviesIndex] = findMovieIndex(movieId, this.props);

        handleStars({
            moviesToRender: updateElement(this.props.moviesToRender, moviesToRenderIndex, {stars}),
            defaultMovies: updateElement(this.props.defaultMovies,defaultMoviesIndex, {stars}),
        });
    };

    handleLike = (movieId, likes) => {

        const [moviesToRenderIndex,defaultMoviesIndex] = findMovieIndex(movieId, this.props);

        this.props.handleLike({
            moviesToRender: updateElement(this.props.moviesToRender, moviesToRenderIndex, {likes}),
            defaultMovies: updateElement(this.props.defaultMovies,defaultMoviesIndex, {likes}),
        });
    };

    handleSearchResult = (searchResult) => {
        this.props.handleSearch({moviesToRender: searchResult});
    };

    handleTitle = (movieId) => {

        const {handleTitleToProps} = this.props;
        const [moviesToRenderIndex] = findMovieIndex(movieId, this.props);
         handleTitleToProps
        ({movieToShowDescription: moviesToRenderIndex});
        this.props.history.push(`/movies/${movieId}`);
    };

    handleDelete = (movieId) => {
        const {history, handleDeleteMovie} = this.props;
        handleDeleteMovie({
                moviesToRender: this.props.moviesToRender.filter(item => item.id !== movieId),
                defaultMovies: this.props.defaultMovies.filter(item => item.id !== movieId),
            });
        history.push('/movies');
    };

    handleEdit = (movieId) => {
        const {history} = this.props;
        history.push(`/edit-movie/${movieId}`);
    };

    handleLogOut = () => {
        const {history, handleUserLogOut} = this.props;
        handleUserLogOut();
        history.push('/login');
    };

    handleActor = (id) => {
        const {history} = this.props;
        history.push(`/actor/${id}`);
    };

    render() {
        const {defaultMovies, movieToShowDescription, moviesToRender, actors} = this.props;
        return(
        <>
             <Switch>
                <Route exact path={Routes.LOGIN} component={Login} />
                <Route exact path={Routes.REGISTER} component={Register} />
                <Route exact path={Routes.EDIT_MOVIE} render={() => <EditMovieContainer {...this.props} handleLogOut={this.handleLogOut} />} />

                <ProtectedRoute exact path={Routes.HOMEPAGE} {...this.props} handleLogOut={this.handleLogOut}><Redirect to={Routes.MOVIES}/></ProtectedRoute>
                <ProtectedRoute exact path={Routes.MOVIES} {...this.props} handleLogOut={this.handleLogOut} render={() =>
                    <Movies {...this.props}
                            handleLike={this.handleLike}
                            handleStar={this.handleStar}
                            handleTitle={this.handleTitle}
                            sortMoviesByLikes={this.sortMoviesByLikes}
                            sortMoviesByStars={this.sortMoviesByStars}
                            resetFilters={this.resetFilters}
                            handleSearchResult={this.handleSearchResult}
                            handleLogOut={this.handleLogOut}

                    />}
                />
                <ProtectedRoute exact path={Routes.MOVIE} {...this.props} render={() =>
                    <MovieFullView
                        movies={defaultMovies}
                        moviesToRender={moviesToRender}
                        movieIDX={movieToShowDescription}
                        handleStar={this.handleStar}
                        handleLike={this.handleLike}
                        handleDelete={this.handleDelete}
                        handleEdit={this.handleEdit}
                        handleLogOut={this.handleLogOut}
                        actors={actors}
                        handleActor={this.handleActor}
                    />} />
                <ProtectedRoute exact path={Routes.ACTOR} {...this.props}
                           render={() => <ActorContainer  {...this.props} handleLogOut={this.handleLogOut}/>} />
                <ProtectedRoute path={"**"} component={PageNotFound} />
            </Switch>
        </>)
};
}

const mapStateToProps = ({moviesReducer, loginReducer}) => ({
    moviesToRender: moviesReducer.moviesToRender,
    defaultMovies: moviesReducer.defaultMovies,
    sortedByStars: moviesReducer.sortedByStars,
    sortedByLikes: moviesReducer.sortedByLikes,
    movieToShowDescription: moviesReducer.movieToShowDescription,
    actors: moviesReducer.actors,
    isLoaded: moviesReducer.isLoaded,
    user: loginReducer.user,
});

const mapDispatchToProps = {
    loadMovies,
    toggleSortByLikes,
    toggleSortByLStars,
    resetSorting,
    handleLike,
    handleStars,
    handleSearch,
    handleTitleToProps,
    handleDeleteMovie,
    handleEditMovie,
    handleUserLogOut
};

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default withRouter(withConnect(App));

App.propTypes = {
    defaultMovies: PropTypes.arrayOf(movieShape),
    moviesToRender: PropTypes.arrayOf(movieShape),
    toggleSortByLikes: PropTypes.func,
    toggleSortByLStars: PropTypes.func,
    resetSorting: PropTypes.func,
    handleLike: PropTypes.func,
    handleStars: PropTypes.func,
    handleSearch: PropTypes.func,
    handleTitleToProps: PropTypes.func,
};