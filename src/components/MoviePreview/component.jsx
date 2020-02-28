import React from "react";
import PropTypes from "prop-types";
import styles from "./style.module.scss";
import Star from "../Stars/component";
import Likes from "../Likes/component";
const MoviePreview = ({ title, likes, stars, poster, handleStar, handleLike, movieId, handleTitle }) => {
  return (
    <div className={styles.movie}>
      <h3 className={styles.title} onClick={() => handleTitle(movieId)}>
        {title}
      </h3>
      <img className={styles.poster} src={poster} alt={title} />
      <Star stars={stars} handleStar={handleStar} movieId={movieId} />
      <div>
        <Likes likes={likes} handleLike={handleLike} movieId={movieId} />
      </div>
    </div>
  );
};

export default MoviePreview;

MoviePreview.propTypes = {
  title: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  stars: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  handleStar: PropTypes.func.isRequired,
  handleLike: PropTypes.func.isRequired,
  movieId: PropTypes.number.isRequired,
  handleTitle: PropTypes.func.isRequired
};
