import React from "react";
import styles from "./styles.module.scss";
import Likes from "../Likes/component";
import Star from "../Stars/component";
import Span from "../Span/component";
import PropTypes from "prop-types";

const MoviesFullDescription = ({ movie, handleLike, handleStar }) => {
  const { likes, id, title, stars, posterUrl, director, actors, genres, description } = movie;
  return (
    <>
      <div className={styles.subInfo}>
        <h3>{title}</h3>
        <Likes movieId={id} handleLike={handleLike} likes={likes} />
        <Star movieId={id} stars={stars} handleStar={handleStar} />
      </div>
      <div className={styles.fullInfo}>
        <img src={posterUrl} alt={title} className={styles.poster} />
        <p>Director: {director}</p>
        <p>
          Actors: <Span array={actors} />{" "}
        </p>
        <p>
          Genres: <Span array={genres} />{" "}
        </p>
        <p>Description: {description}</p>
      </div>
    </>
  );
};

export default MoviesFullDescription;

MoviesFullDescription.propType = {
  movie: PropTypes.object.isRequired,
  handleLike: PropTypes.func.isRequired,
  handleStar: PropTypes.func.isRequired
};
