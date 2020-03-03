import React, {Component} from 'react';
import EditMovie from "../../components/EditMovie/component";
import {handleEditMovie} from "../App/actions";
import {connect} from "react-redux";
import {findMovieIndex, updateElement} from "../../helpers/helpers";

class EditMovieContainer extends Component {
    movie = this.props.moviesToRender[this.props.movieToShowDescription];
    state = {
        title: '',
        posterUrl: '',
        director: '',
        genres: '',
        description: '',
    };

    componentDidMount() {
        this.setState({
            title: this.movie.title,
            posterUrl: this.movie.posterUrl,
            director: this.movie.director,
            genres: this.movie.genres.join(", "),
            description: this.movie.description,});
    }

    handleTitle = (event) => {
        this.setState({title: event.target.value})
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

    handleSubmit = (movieId, event) => {
        event.preventDefault();
        const {title, director, posterUrl, genres, description} = this.state;

        const [moviesToRenderIndex,defaultMoviesIndex] = findMovieIndex(movieId, this.props);
        this.props.handleEditMovie({
            moviesToRender: updateElement(this.props.moviesToRender, moviesToRenderIndex,
                {title, director, posterUrl, genres: genres.split(","), description}),
            defaultMovies: updateElement(this.props.defaultMovies,defaultMoviesIndex,
                {title, director, posterUrl, genres: genres.split(","), description}),
        });


        this.props.history.push(`/movies/${movieId}`);
    };

    render() {

        const {title, posterUrl, director, genres, description } = this.state;
        return (
            <EditMovie
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
    handleEditMovie
};

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
);


export default withConnect(EditMovieContainer);