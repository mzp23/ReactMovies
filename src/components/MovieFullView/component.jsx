import React from "react";
import PropTypes from "prop-types";
import styles from "./style.module.scss";
import MoviesFullDescription from "../MoviesFullDescription/component";

const MovieFullView = ({ movie, handleLike, handleStar }) => {
  return (
    <section className={styles.movieFullView}>
      {movie ? (
        <MoviesFullDescription
          movie={movie}
          handleLike={handleLike}
          handleStar={handleStar}
        />
      ) : (
        <h3 className={styles.movieFullView}>
          Click on the film title to show full description
        </h3>
      )}
    </section>
  );
};

export default MovieFullView;

MovieFullView.propTypes = {
  movie: PropTypes.object,
  handleLike: PropTypes.func,
  handleStar: PropTypes.func
};
