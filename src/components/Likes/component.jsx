import React from "react";
import PropTypes from "prop-types";
import styles from "./style.module.scss";

import { handleLike } from '../../containers/App/actions'
import { connect } from "react-redux";

const Likes = ({ likes, handleLike, movieId, title }) => (
  <p>
    {title}: {likes}
    <span
      className={styles.postReaction}
      onClick={() => handleLike({movieId, likes: likes + 1})}
      role="img"
      aria-label="like"
    >
      &#128077;
    </span>
    <span
      className={styles.postReaction}
      onClick={() => handleLike({movieId,likes: likes - 1})}
      role="img"
      aria-label="dislike"
    >
      &#128078;
    </span>
  </p>
);


const mapDispatchToProps = {
  handleLike
}


Likes.propTypes = {
  likes: PropTypes.number.isRequired,
  handleLike: PropTypes.func.isRequired,
  movieId: PropTypes.number.isRequired
};

export default  connect(null, mapDispatchToProps)(Likes);
