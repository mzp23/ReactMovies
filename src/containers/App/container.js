import React, {Component} from 'react';
import styles from './styles.module.scss'
import uuid from 'uuid';
import {findMovieIndex, updateElement, sortArr} from "../../helpers/helpers";
import Button from "../../components/Button/component"
import MoviePreview from "../../components/MoviePreview/component";
import MovieFullView from "../../components/MovieFullView/component";
import SearchBar from "../SearchBar/container";

export default class App extends Component{

     state = {
            defaultMovies: null,
            moviesToRender: null,
            sortedByLikes: false,
            sortedByStars: false,
            searchBarInput: [],
            movieToShowDescription: null,
        };

    componentDidMount() {
        this.getData();
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        console.log(nextProps,nextState);
        return true;
    };

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
            const sortedArr = [...this.state.moviesToRender]
                .sort((a,b) => sortArr(a.likes,b.likes, this.state.sortedByLikes));
            this.setState((prevState) =>({
                moviesToRender: sortedArr,
                sortedByLikes: !prevState.sortedByLikes,
            }))
    };

    sortMoviesByStars = () => {
        const sortedArr = [...this.state.moviesToRender]
            .sort((a, b) => sortArr(a.stars, b.stars, this.state.sortedByStars));
            this.setState((prevState) => ({
                moviesToRender: sortedArr,
                sortedByStars: !prevState.sortedByStars,
            }))
    };

    resetFilters = () => {
        const sortedArr = [...this.state.moviesToRender].sort((a,b) => a.id - b.id);
        this.setState({
            moviesToRender: sortedArr,
            sortedByLikes: false,
            sortedByStars: false,
        })

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

    handleSearchRequest = (e) => {
        const string = this.state.searchBarInput.split(" ").filter(el => el).join(" ");
        const regExp = new RegExp(string, 'i');
        const filteredMovies = this.state.defaultMovies.filter(el => el.title.match(regExp));
        const moviesToRender = this.state.searchBarInput.trim() ? filteredMovies : this.state.defaultMovies;
        this.setState({
            moviesToRender,
            searchBarInput: ''
        })
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