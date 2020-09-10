import React from "react";
import styles from "./style.module.scss";
import MoviesFullDescription from "../MoviesFullDescription/component";
import { movieShape } from "../../helpers/propTypeShapes";
import withTranslate from "../../hoc/withTranslation";
import { connect } from "react-redux";
import { compose } from "redux";

const MovieFullView = (props) => {
  const {
    moviesToRender,
    movieToShowDescription,
    words,
  } = props;

  const {
    "movie-director": directorTitle,
    "movie-actors": actorsTitle,
    "movie-genres": genresTitle,
    "movie-description": descriptionsTitle,
    "movie-likes": likesTitle,
    "movie-btn-edit-title": editBtnTitle,
    "movie-btn-delete-title": deleteBtnTitle,
  } = words;
  const wordsToMovie = {
    directorTitle,
    actorsTitle,
    genresTitle,
    descriptionsTitle,
    likesTitle,
    editBtnTitle,
    deleteBtnTitle,
  };

  const movie = moviesToRender[movieToShowDescription];

  return (
    <>
      {movieToShowDescription && (
        <>
          <section className={styles.movieFullView}>
            <MoviesFullDescription movie={movie} {...wordsToMovie} />
          </section>
        </>
      )}
    </>
  );
};

const mapStateToProps = ({ moviesReducer }) => ({
  moviesToRender: moviesReducer.moviesToRender,
  movieToShowDescription: moviesReducer.movieToShowDescription,
});

const witchConnect = connect(mapStateToProps);

export default compose(withTranslate, witchConnect)(MovieFullView);

MovieFullView.propTypes = {
  movie: movieShape,
};
