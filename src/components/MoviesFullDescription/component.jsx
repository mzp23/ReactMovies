import React from "react";
import styles from "./styles.module.scss";
import Likes from "../Likes/component";
import Span from "../Span/component";
import PropTypes from "prop-types";
import {movieShape} from "../../helpers/propTypeShapes";
import Button from "../Button/component";
import Stars from "../Stars/component";

const MoviesFullDescription = (props) => {
  const { movie, handleLike, handleStar, handleDelete, handleEdit, actors, handleActor } = props;
  const { likes, id, title, stars, posterUrl, director, genres, description, actorsIds } = movie;
  const actorsToRender = actors.filter(elem => actorsIds.includes(elem.id));
  return (
    <>
      <div className={styles.subInfo}>
        <h3>{title}</h3>
        <Likes movieId={id} handleLike={handleLike} likes={likes} />
        <Stars movieId={id} stars={stars} handleStar={handleStar} />
        <Button handleClick={handleEdit} title="Edit"/>
        <Button handleClick={handleDelete} title="Delete"/>
      </div>
      <div className={styles.fullInfo}>
        <img src={posterUrl} alt={title} className={styles.poster} />
        <p>Director: {director}</p>
        <p>
          Actors: <Span array={actorsToRender} handleActor={handleActor} />{" "}
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
  movie: movieShape.isRequired,
  handleLike: PropTypes.func.isRequired,
  handleStar: PropTypes.func.isRequired
};
