import React from "react";
import styles from "./styles.module.scss";
import Likes from "../Likes/component";
import Span from "../Span/component";
import PropTypes from "prop-types";
import { movieShape } from "../../helpers/propTypeShapes";
import Button from "../Button/component";
import Stars from "../Stars/component";

const MoviesFullDescription = props => {
  const {
    movie,
    handleLike,
    handleStar,
    handleDelete,
    handleEdit,
    actors,
    handleActor,
    directorTitle,
    actorsTitle,
    genresTitle,
    descriptionsTitle,
    likesTitle,
    editBtnTitle,
    deleteBtnTitle
  } = props;
  const {
    likes,
    id,
    title,
    stars,
    posterUrl,
    director,
    genres,
    description
  } = movie;
  return (
    <>
      <div className={styles.subInfo}>
        <h3>{title}</h3>
        <Likes
          movieId={id}
          handleLike={handleLike}
          likes={likes}
          title={likesTitle}
        />
        <Stars movieId={id} stars={stars} handleStar={handleStar} />
        <Button handleClick={handleEdit} title={editBtnTitle} />
        <Button handleClick={handleDelete} title={deleteBtnTitle} />
      </div>
      <div className={styles.fullInfo}>
        <img src={posterUrl} alt={title} className={styles.poster} />
        <p>
          {directorTitle}: {director}
        </p>
        <p>
          {actorsTitle}: <Span array={actors} handleActor={handleActor} />{" "}
        </p>
        <p>
          {genresTitle}: <Span array={genres} />{" "}
        </p>
        <p>
          {descriptionsTitle}: {description}
        </p>
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
