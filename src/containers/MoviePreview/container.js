import React, {Component} from 'react';
import MoviePreview from "../../components/MoviePreview/component";
import {sortArr} from "../../helpers/helpers";
import uuid from 'uuid';

class MoviePreviewContainer extends Component {

    componentDidUpdate(prevProps) {
        if (prevProps.sortedByLikes !== this.props.sortedByLikes) {
            this.sortMoviesByLikes();
        }

        if (prevProps.sortedByStars !== this.props.sortedByStars) {
            this.sortMoviesByStars();
        }

        if (this.props.resetSort) {
            this.resetFilters();
        }
    }

    sortMoviesByLikes = () => {
        const moviesToRender = [...this.props.movies]
            .sort((a,b) => sortArr(a.likes,b.likes, this.props.sortedByLikes));
         this.props.handleSortMoviesByLikes(moviesToRender);
    };

    sortMoviesByStars = () => {
        const moviesToRender = [...this.props.movies]
            .sort((a, b) => sortArr(a.stars, b.stars, this.props.sortedByStars));
        this.props.handleSortMoviesByStars(moviesToRender)
    };

    resetFilters = () => {
        const sortedArr = [...this.props.movies].sort((a,b) => a.id - b.id);
        this.props.handleResetFilters({
            moviesToRender: sortedArr,
            resetSort: false
        })
    };

    render() {
        return (
            <>
                {this.props.movies.map((el) =>
                    <MoviePreview
                            key={uuid()}
                            stars={el.stars}
                            likes={el.likes}
                            title={el.title}
                            poster={el.posterUrl}
                            handleStar={this.props.handleStar}
                            handleLike={this.props.handleLike}
                            handleTitle={this.props.handleTitle}
                            movieId={el.id}
                    />)}
            </>
        );
    }
}

export default MoviePreviewContainer;