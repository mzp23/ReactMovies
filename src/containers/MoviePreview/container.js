import React, {Component} from 'react';
import {connect} from 'react-redux';
import MoviePreview from "../../components/MoviePreview/component";
import uuid from 'uuid';
import {sortByStars, toggleSortByLikes, toggleSortByLStars} from '../App/actions';

class MoviePreviewContainer extends Component {

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     return nextProps.movie !== this.props.movies;
    // }

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
        // const {movies, handleSortMoviesByLikes, sortedByLikes} = this.props;
        // const moviesToRender = [...movies].sort((a,b) => sortArr(a.likes,b.likes, sortedByLikes));
        //  handleSortMoviesByLikes(moviesToRender);
        // console.log(this.props, 444444);
    };

    sortMoviesByStars = () => {
        const {moviesToRender, sortedByStars} = this.props;
        // console.log(sortedByStars);

        // this.props.sortByStars({moviesToRender: movies });
        // handleSortMoviesByStars(moviesToRender)
    };

    resetFilters = () => {
        const {movies, handleResetFilters} = this.props;
        const sortedArr = [...movies].sort((a,b) => a.id - b.id);
        handleResetFilters({
            moviesToRender: sortedArr,
            resetSort: false
        })
    };

    render() {
        const {handleStar, handleLike, handleTitle,moviesToRender} = this.props;
        return (
            <>
                {moviesToRender && moviesToRender.map((el) =>
                    <MoviePreview
                            key={uuid()}
                            stars={el.stars}
                            likes={el.likes}
                            title={el.title}
                            poster={el.posterUrl}
                            handleStar={handleStar}
                            handleLike={handleLike}
                            handleTitle={handleTitle}
                            movieId={el.id}
                    />)}
            </>
        );
    }
}

const mapStateToProps = ({appReducer}) => ({
    moviesToRender: appReducer.moviesToRender,
    sortedByLikes: appReducer.sortedByLikes,
    sortedByStars: appReducer.sortedByStars,
    resetSort: appReducer.resetSort,
});

const mapDispatchToProps = () => ({

});

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default withConnect(MoviePreviewContainer);