import React, {Component} from 'react';
import styles from './styles.module.scss'
import {findMovieIndex, updateElement} from "../../helpers/helpers";
import Button from "../../components/Button/component"
import MovieFullView from "../../components/MovieFullView/component";
import SearchBar from "../SearchBar/container";
import MoviePreviewContainer from "../MoviePreview/container";

export default class App extends Component{

     state = {
            defaultMovies: null,
            moviesToRender: null,
            sortedByLikes: true,
            sortedByStars: true,
            resetSort: false,
            movieToShowDescription: null,
        };

    componentDidMount() {
        this.getData();
    }

    getData() {
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
                this.setState({
                    moviesToRender: res.movies,
                    defaultMovies: res.movies
                });
            });
    };

    sortMoviesByLikes = () => {
            this.setState((prevState) =>({
                sortedByLikes: !prevState.sortedByLikes,
            }))
    };

    handleSortMoviesByLikes = (moviesToRender) => {
        this.setState({moviesToRender})
    };

    sortMoviesByStars = () => {
            this.setState((prevState) => ({
                sortedByStars: !prevState.sortedByStars,
            }))
    };

    handleSortMoviesByStars = (moviesToRender) => {
        this.setState({moviesToRender})
    };

    resetFilters = () => {
        this.setState({
            resetSort: true,
        });
    };

    handleResetFilters = (state) => {
        this.setState({...state})
    };

    handleStar = (movieId, stars) => {
        const [moviesToRenderIndex,defaultMoviesIndex] = findMovieIndex(movieId, this.state);

         this.setState({
           moviesToRender: updateElement(this.state.moviesToRender, moviesToRenderIndex, {stars}),
           defaultMovies: updateElement(this.state.defaultMovies, defaultMoviesIndex, {stars}),
       })
    };

    handleLike = (movieId, likes) => {
        const [moviesToRenderIndex,defaultMoviesIndex] = findMovieIndex(movieId, this.state);

         this.setState({
           moviesToRender: updateElement(this.state.moviesToRender, moviesToRenderIndex, {likes}),
           defaultMovies: updateElement(this.state.defaultMovies,defaultMoviesIndex, {likes}),
       })
    };

    handleSearchResult = (searchResult) => {
        this.setState({moviesToRender: searchResult});
    };

    handleTitle = (movieId) => {
        const [moviesToRenderIndex] = findMovieIndex(movieId, this.state);
        this.setState({movieToShowDescription: moviesToRenderIndex})
    };

    render() {
        console.log(this.state);
        return(
        <>
        <section className={styles.sorting}>
            <h2>Sort movies</h2>
            <div className={styles.button_container}>
                <Button title="by likes" handleClick={this.sortMoviesByLikes}/>
                <Button title="by rating" handleClick={this.sortMoviesByStars}/>
                <Button title="reset" handleClick={this.resetFilters}/>
           </div>
           <SearchBar handleSearchResult={this.handleSearchResult} movies={this.state.defaultMovies}/>
        </section>
                {this.state.moviesToRender
                &&
                    <>
            <div className={styles.movies}>
        <section className={styles.movie_preview_container}>

                <MoviePreviewContainer
                    sortedByStars={this.state.sortedByStars}
                    sortedByLikes={this.state.sortedByLikes}
                    resetSort={this.state.resetSort}
                    movies={this.state.moviesToRender}
                    handleSortMoviesByLikes={this.handleSortMoviesByLikes}
                    handleSortMoviesByStars={this.handleSortMoviesByStars}
                    handleResetFilters={this.handleResetFilters}
                    handleStar={this.handleStar}
                    handleLike={this.handleLike}
                    handleTitle={this.handleTitle}
                />
        </section>
                <MovieFullView
                    movie={this.state.moviesToRender[this.state.movieToShowDescription]}
                    handleStar={this.handleStar}
                    handleLike={this.handleLike}
                />
            </div>
                    </>}
        </>)
};
}