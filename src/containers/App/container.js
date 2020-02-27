import React, {Component} from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.scss'
import {findMovieIndex, sortArr, updateElement} from "../../helpers/helpers";
import Button from "../../components/Button/component"
import SearchBar from "../SearchBar/container";
import MoviePreviewContainer from "../MoviePreview/container";
import MovieFullView from "../../components/MovieFullVIew/component";
import {loadMovies,resetSorting, toggleSortByLikes, toggleSortByLStars,
        handleLike, handleStars, handleSearch, handleTitleToProps} from "./actions";

class App extends Component{

     state = {
            isLoaded: false,
        };

    componentDidMount() {
        this.getData();
    }

    getData() {
        const {loadMovies} = this.props;
        fetch('./moviesData.json',
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
                    defaultMovies: res.movies
                });
                this.setState({isLoaded: true});
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
        const [moviesToRenderIndex,defaultMoviesIndex] = findMovieIndex(movieId, this.props);

        this.props.handleStars({
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
        const [moviesToRenderIndex] = findMovieIndex(movieId, this.props);
        this.props.handleTitleToProps
        ({movieToShowDescription: moviesToRenderIndex})
    };

    render() {
        console.log(this.props);
        return(
        <>
        <section className={styles.sorting}>
            <h2>Sort movies</h2>
            <div className={styles.button_container}>
                <Button title="by likes" handleClick={this.sortMoviesByLikes}/>
                <Button title="by rating" handleClick={this.sortMoviesByStars}/>
                <Button title="reset" handleClick={this.resetFilters}/>
           </div>
           <SearchBar handleSearchResult={this.handleSearchResult} movies={this.props.defaultMovies}/>
        </section>
            <div className={styles.movies}>
                {this.state.isLoaded
                &&
                    <>
                <section className={styles.movie_preview_container}>

                    <MoviePreviewContainer
                        handleStar={this.handleStar}
                        handleLike={this.handleLike}
                        handleTitle={this.handleTitle}
                    />
                </section>
                <MovieFullView
                    movie={this.props.moviesToRender[this.props.movieToShowDescription]}
                    handleStar={this.handleStar}
                    handleLike={this.handleLike}
                />
                </>
                }
            </div>
        </>)
};
}

const mapStateToProps = ({appReducer}) => ({
    moviesToRender: appReducer.moviesToRender,
    defaultMovies: appReducer.defaultMovies,
    sortedByStars: appReducer.sortedByStars,
    sortedByLikes: appReducer.sortedByLikes,
    movieToShowDescription: appReducer.movieToShowDescription,
});

const mapDispatchToProps = {
    loadMovies,
    toggleSortByLikes,
    toggleSortByLStars,
    resetSorting,
    handleLike,
    handleStars,
    handleSearch,
    handleTitleToProps
};

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default withConnect(App);