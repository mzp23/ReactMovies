import React from "react";
import styles from "./styles.module.scss";
import Likes from "../Likes/component";
import Span from "../Span/component";
import { movieShape } from "../../helpers/propTypeShapes";
import Button from "../Button/component";
import Stars from "../Stars/component";

const MoviesFullDescription = props => {
  const {
    movie,
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
          likes={likes}
          title={likesTitle}
        />
        <Stars movieId={id} stars={stars} />
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
};
