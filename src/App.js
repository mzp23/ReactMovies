import React, {Component} from 'react';
import Button from "./components/Button/Button";
import styles from './App.module.scss'
import SearchBar from "./components/SearchBar/SearchBar";
import MoviePreview from "./components/MoviePreview/MoviePreview";
import MovieFullView from "./components/MovieFullVIew/MovieFullView";
export default class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data: null
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
            .then(res => this.setState({data: res}));
    };

    render() {
        console.log(this.state)
        return(
        <>
        <section className={styles.sorting}>
        <h2>Sort movies</h2>
        <div className={styles.button_container}>
        <Button title="by likes"/>
        <Button title="by rating"/>
        <Button title="reset"/>
        </div>
        <SearchBar/>
        </section>
            <div className={styles.movies}>
        <section className={styles.movie_preview_container}>
            {this.state.data
            &&
                <>
            <MoviePreview
            title={this.state.data.movies[0].title}
            poster={this.state.data.movies[0].posterUrl}
            likes={this.state.data.movies[0].likes}
            stars={this.state.data.movies[0].stars}
            />
            <MoviePreview
            title={this.state.data.movies[1].title}
            poster={this.state.data.movies[0].posterUrl}
            likes={this.state.data.movies[1].likes}
            stars={this.state.data.movies[1].stars}
            />
                <MoviePreview
            title={this.state.data.movies[2].title}
            poster={this.state.data.movies[0].posterUrl}
            likes={this.state.data.movies[2].likes}
            stars={this.state.data.movies[2].stars}
            />
            </>
            }
        </section>
                <MovieFullView/>
            </div>
        </>)
};
}