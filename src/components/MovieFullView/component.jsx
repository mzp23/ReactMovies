import React from "react";
import PropTypes from "prop-types";
import styles from "./style.module.scss";
import MoviesFullDescription from "../MoviesFullDescription/component";
import { movieShape } from "../../helpers/propTypeShapes";
import Navigation from "../Navigation/component";
import withTranslate from "../../hoc/withTranslation";

const MovieFullView = props => {
  const {
    moviesToRender,
    movieIDX,
    handleLike,
    handleStar,
    handleDelete,
    handleEdit,
    actors,
    handleActor,
    words
  } = props;

  const {
    "movie-director": directorTitle,
    "movie-actors": actorsTitle,
    "movie-genres": genresTitle,
    "movie-description": descriptionsTitle,
    "movie-likes": likesTitle,
    "movie-btn-edit-title": editBtnTitle,
    "movie-btn-delete-title": deleteBtnTitle,
    "navigation-menu-link-homepage": homepage,
    "navigation-logout-btn": logOutTitle
  } = words;
  const wordsToMovie = {
    directorTitle,
    actorsTitle,
    genresTitle,
    descriptionsTitle,
    likesTitle,
    editBtnTitle,
    deleteBtnTitle
  };

  const movie = moviesToRender[movieIDX];
  return (
    <>
      {movieIDX && (
        <>
          <Navigation
            homepage={homepage}
            logOutTitle={logOutTitle}
          />
          <section className={styles.movieFullView}>
            <MoviesFullDescription
              movie={movie}
              handleLike={handleLike}
              handleStar={handleStar}
              handleDelete={() => handleDelete(movie.id)}
              handleEdit={() => handleEdit(movie.id)}
              actors={actors}
              handleActor={handleActor}
              {...wordsToMovie}
            />
          </section>
        </>
      )}
    </>
  );
};

export default withTranslate(MovieFullView);

MovieFullView.propTypes = {
  movie: movieShape,
  handleLike: PropTypes.func,
  handleStar: PropTypes.func
};
