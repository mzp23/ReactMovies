import React from "react";
import styles from "./style.module.scss";
import MoviesFullDescription from "../MoviesFullDescription/component";
import { movieShape } from "../../helpers/propTypeShapes";
import withTranslate from "../../hoc/withTranslation";

const MovieFullView = props => {
  const {
    moviesToRender,
    movieIDX,
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
    "movie-btn-delete-title": deleteBtnTitle
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
          <section className={styles.movieFullView}>
            <MoviesFullDescription
              movie={movie}
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
};
