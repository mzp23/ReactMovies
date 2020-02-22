import React, {Component} from 'react';
import Button from "./components/Button/Button";
import styles from './App.module.scss'
import SearchBar from "./components/SearchBar/SearchBar";
import MoviePreview from "./components/MoviePreview/MoviePreview";
import MovieFullView from "./components/MovieFullVIew/MovieFullView";
import uuid from 'uuid';

export default class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            defaultMovies: null,
            moviesToRender: null,
            sortedByLikes: false,
            sortedByStars: false,
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
        const isSordetByLikes = this.state.sortedByLikes;
        const isSordetByStars = this.state.sortedByStars;
        if(isSordetByLikes || isSordetByStars) {
        this.setState({
            ...this.state,
            moviesToRender: this.state.defaultMovies,
            sortedByLikes: false,
            sortedByStars: false,
        })
        }
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
        <SearchBar/>
        </section>
            <div className={styles.movies}>
        <section className={styles.movie_preview_container}>
            {this.state.moviesToRender
            &&
            this.state.moviesToRender.map(el => el =
                <MoviePreview
                key={uuid()}
                stars={el.stars}
                likes={el.likes}
                title={el.title}
                poster={el.posterUrl}
                />)
            }

        </section>
                <MovieFullView/>
            </div>
        </>)
};
}