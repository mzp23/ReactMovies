import React, { useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./style.module.scss";
import Stars from "../Stars/component";
import Likes from "../Likes/component";
const MoviePreview = React.memo((props) => {
  
  const { title, likes, stars, poster, movieId, handleTitle, likeTitle } = props;
  const memoizedHandleTitle = useCallback(() => {
    handleTitle(movieId)
  }, [handleTitle,movieId])

    return (
    <div className={styles.movie}>
      <h3 className={styles.title} onClick={memoizedHandleTitle}>
        {title}
      </h3>
      <img className={styles.poster} src={poster} alt={title} />
      <Stars stars={stars} movieId={movieId} />
      <div>
        <Likes likes={likes} movieId={movieId} title={likeTitle} />
      </div>
    </div>
  );
});

export default MoviePreview;

MoviePreview.propTypes = {
  title: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  stars: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  handleTitle: PropTypes.func.isRequired
};
