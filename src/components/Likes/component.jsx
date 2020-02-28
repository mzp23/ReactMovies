import React from "react";
import PropTypes from "prop-types";
import styles from "./style.module.scss";

const Likes = ({ likes, handleLike, movieId }) => (
  <p>
    Likes: {likes}
    <span
      className={styles.postReaction}
      onClick={() => handleLike(movieId, likes + 1)}
      role="img"
      aria-label="like"
    >
      &#128077;
    </span>
    <span
      className={styles.postReaction}
      onClick={() => handleLike(movieId, likes - 1)}
      role="img"
      aria-label="dislike"
    >
      &#128078;
    </span>
  </p>
);

Likes.propTypes = {
  likes: PropTypes.number.isRequired,
  handleLike: PropTypes.func.isRequired,
  movieId: PropTypes.number.isRequired
};

export default Likes;
