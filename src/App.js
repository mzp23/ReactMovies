import React, {Component} from 'react';
import Button from "./components/Button/Button";
import styles from './App.module.scss'
import SearchBar from "./components/SearchBar/SearchBar";
import MoviePreview from "./components/MoviePreview/MoviePreview";
import MovieFullView from "./components/MovieFullVIew/MovieFullView";

import uuid from 'uuid';
import {findMovieIndex, updateElement} from "./helpers/helpers";

export default class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            defaultMovies: null,
            moviesToRender: null,
            sortedByLikes: false,
            sortedByStars: false,
            searchBarInput: '',
            movieToShowDescription: null,
        };
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
        if(!this.state.sortedByLikes) {
            const sortedArr = [...this.state.moviesToRender].sort((a, b) => b.likes - a.likes);
            this.setState({
                ...this.state,
                moviesToRender: sortedArr,
                sortedByLikes: true,
                sortedByStars: false,
            })
        }
    };

    sortMoviesByStars = () => {
        if(!this.state.sortedByStars) {
            const sortedArr = [...this.state.moviesToRender].sort((a, b) => b.stars - a.stars);
            this.setState({
                ...this.state,
                moviesToRender: sortedArr,
                sortedByLikes: false,
                sortedByStars: true,
            })
        }
    };

    resetFilters = () => {
        const isSortedByLikes = this.state.sortedByLikes;
        const isSortedByStars = this.state.sortedByStars;
        if(isSortedByLikes || isSortedByStars) {
        this.setState({
            ...this.state,
            moviesToRender: this.state.defaultMovies,
            sortedByLikes: false,
            sortedByStars: false,
        })
        }
    };

    handleStar = (movieId, stars) => {
        const [moviesToRenderIndex,defaultMoviesIndex] = findMovieIndex(movieId, this.state);

         this.setState({
           ...this.state,
           sortedByStars: false,
           moviesToRender: updateElement(this.state.moviesToRender, moviesToRenderIndex, {stars}),
           defaultMovies: updateElement(this.state.defaultMovies, defaultMoviesIndex, {stars}),
       })
    };

    handleLike = (movieId, likes) => {
        const [moviesToRenderIndex,defaultMoviesIndex] = findMovieIndex(movieId, this.state);

         this.setState({
           ...this.state,
           sortedByLikes: false,
           moviesToRender: updateElement(this.state.moviesToRender, moviesToRenderIndex, {likes}),
           defaultMovies: updateElement(this.state.defaultMovies,defaultMoviesIndex, {likes}),
       })
    };

    handleSearch = (e) => {
        this.setState({...this.state,searchBarInput: e.target.value});
    };

    handleSearchRequest = (e) => {
        const string = this.state.searchBarInput.split(" ").filter(el => el).join(" ");
        const regExp = new RegExp(string, 'i');
        const filteredMovies = this.state.defaultMovies.filter(el => el.title.match(regExp));
        const moviesToRender = this.state.searchBarInput.trim() ? filteredMovies : this.state.defaultMovies;
        this.setState({
            ...this.state,
            moviesToRender,
            searchBarInput: ''
        })
    };

    handleTitle = (movieId) => {
        const [moviesToRenderIndex] = findMovieIndex(movieId, this.state);
        this.setState({...this.state, movieToShowDescription: moviesToRenderIndex})
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
        <SearchBar handleSearch={this.handleSearch} handleSearchRequest={this.handleSearchRequest} value={this.state.searchBarInput}/>
        </section>
            <div className={styles.movies}>
        <section className={styles.movie_preview_container}>
            {this.state.moviesToRender
            &&
            this.state.moviesToRender.map(el=> el =
                <MoviePreview
                key={uuid()}
                stars={el.stars}
                likes={el.likes}
                title={el.title}
                poster={el.posterUrl}
                handleStar={this.handleStar}
                handleLike={this.handleLike}
                handleTitle={this.handleTitle}
                movieId={el.id}
                />)
            }

        </section>
                {this.state.moviesToRender
                &&
                <MovieFullView
                    movie={this.state.moviesToRender[this.state.movieToShowDescription]}
                    handleStar={this.handleStar}
                    handleLike={this.handleLike}
                />}
            </div>
        </>)
};
}