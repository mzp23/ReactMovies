import React, { useCallback, useEffect } from "react";
import uuid from "uuid";
import styles from "./styles.module.scss";
import Likes from "../Likes/component";
import Span from "../Span/component";
import { movieShape } from "../../helpers/propTypeShapes";
import Button from "../Button/component";
import Stars from "../Stars/component";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import { fetchDeleteMovie, fetchActors } from "../../containers/App/actions.js";
import { getActors, getMovieToRender } from "../../containers/App/selectors";
import { compose } from "redux";
import withTranslation from "../../hoc/withTranslation";

const MoviesFullDescription = ({
  movie,
  actors,
  words,
  fetchDeleteMovie,
  fetchActors,
}) => {
  const {
    likes,
    id,
    title,
    stars,
    posterUrl,
    director,
    genres,
    description,
    actorsIds,
  } = movie;

  const {
    "movie-director": directorTitle,
    "movie-actors": actorsTitle,
    "movie-genres": genresTitle,
    "movie-description": descriptionsTitle,
    "movie-likes": likesTitle,
    "movie-btn-edit-title": editBtnTitle,
    "movie-btn-delete-title": deleteBtnTitle,
  } = words;

  useEffect(() => {
    fetchActors(actorsIds);
  }, [actorsIds, fetchActors]);

  const history = useHistory();

  const handleActor = (id) => {
    history.push(`/actor/${id}`);
  };

  const handleEdit = () => {
    history.push(`/edit-movie/${id}`);
  };

  const handleDelete = async () => {
    await fetchDeleteMovie(id);
    history.push("/movies");
  };

  const memoizedHandleEdit = useCallback(handleEdit, []);
  const memoizedHandleDelete = useCallback(handleDelete, []);

  return (
    <section className={styles.movieFullView}>
      <div className={styles.subInfo}>
        <h3>{title}</h3>
        <Likes movieId={id} likes={likes} title={likesTitle} />
        <Stars movieId={id} stars={stars} />
        <Button handleClick={memoizedHandleEdit} title={editBtnTitle} />
        <Button handleClick={memoizedHandleDelete} title={deleteBtnTitle} />
      </div>
      <div className={styles.fullInfo}>
        <img src={posterUrl} alt={title} className={styles.poster} />
        <p>
          {directorTitle}: {director}
        </p>
        <p>
          {actorsTitle}:{" "}
          {actors &&
            actors.map((actor, index, arr) => {
              return (
                <span key={uuid()} onClick={() => handleActor(actor.id)}>
                  {index < arr.length - 1 ? `${actor.name}, ` : actor.name}
                </span>
              );
            })}
        </p>
        <p>
          {genresTitle}: <Span array={genres} />{" "}
        </p>
        <p>
          {descriptionsTitle}: {description}
        </p>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  actors: getActors(state),
  movie: getMovieToRender(state),
});

const mapDispatchToProps = {
  fetchDeleteMovie,
  fetchActors,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withTranslation, withConnect)(MoviesFullDescription);

MoviesFullDescription.propType = {
  movie: movieShape.isRequired,
};
