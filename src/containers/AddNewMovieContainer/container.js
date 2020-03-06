import React, {Component} from 'react';
import {fetchAddNewMovie} from "./actions";
import {connect} from "react-redux";
import AddMovie from "../../components/AddMovie/component";
import {fetchMovies} from "../App/actions";



class AddMovieContainer extends Component {
    state = {
        title: '',
        posterUrl: '',
        director: '',
        genres: '',
        description: '',
    };

    handleTitle = (event) => {
        this.setState({title: event.target.value});
    };

    handlePoster = (event) => {
        this.setState({posterUrl: event.target.value})
    };

    handleDirector= (event) => {
        this.setState({director: event.target.value})
    };

    handleGenres = (event) => {
        this.setState({genres: event.target.value})
    };

    handleDescription = (event) => {
        this.setState({description: event.target.value})
    };

    handleSubmit = async (movieId, event) => {
        event.preventDefault();
        const {fetchAddNewMovie, history, fetchMovies} = this.props;
        const {title, director, posterUrl, genres, description} = this.state;
        await fetchAddNewMovie({title, director, posterUrl, genres : genres.split(','), description});
        await fetchMovies();
        history.push(`/movies/`);
    };

    render() {
        const {title, posterUrl, director, genres, description } = this.state;
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

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
);
export default withConnect(AddMovieContainer);