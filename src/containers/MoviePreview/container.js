import React, { Component } from "react";
import { connect } from "react-redux";
import MoviePreview from "../../components/MoviePreview/component";
import uuid from "uuid";

class MoviePreviewContainer extends Component {
  render() {
    const { handleStar, handleLike, handleTitle, moviesToRender } = this.props;
    return (
      <>
        {moviesToRender &&
          moviesToRender.map(el => (
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
            />
          ))}
      </>
    );
  }
}

const mapStateToProps = ({ moviesReducer }) => ({
  moviesToRender: moviesReducer.moviesToRender,
  sortedByLikes: moviesReducer.sortedByLikes,
  sortedByStars: moviesReducer.sortedByStars,
  resetSort: moviesReducer.resetSort
});

const withConnect = connect(mapStateToProps);

export default withConnect(MoviePreviewContainer);
