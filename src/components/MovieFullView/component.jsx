import React from "react";
import PropTypes from "prop-types";
import styles from "./style.module.scss";
import MoviesFullDescription from "../MoviesFullDescription/component";
import { movieShape } from "../../helpers/propTypeShapes";
import Navigation from "../Navigation/component";

const MovieFullView = props => {
  const {
    moviesToRender,
    movieIDX,
    handleLike,
    handleStar,
    handleDelete,
    handleEdit,
    handleLogOut,
    actors,
    handleActor
  } = props;
  const movie = moviesToRender[movieIDX];
  return (
    <>
      {movieIDX && (
        <>
          <Navigation handleLogOut={handleLogOut} />
          <section className={styles.movieFullView}>
            <MoviesFullDescription
              movie={movie}
              handleLike={handleLike}
              handleStar={handleStar}
              handleDelete={() => handleDelete(movie.id)}
              handleEdit={() => handleEdit(movie.id)}
              actors={actors}
              handleActor={handleActor}
            />
          </section>
        </>
      )}
    </>
  );
};

export default MovieFullView;

MovieFullView.propTypes = {
  movie: movieShape,
  handleLike: PropTypes.func,
  handleStar: PropTypes.func
};
