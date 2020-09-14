import PropTypes from "prop-types";
import React from "react";
import styles from "../../containers/App/styles.module.scss";
import Button from "../Button/component";
import SearchBar from "../../containers/SearchBar/container";
import MoviePreviewContainer from "../../containers/MoviePreview/container";
import { movieShape } from "../../helpers/propTypeShapes";
import withTranslate from "../../hoc/withTranslation";
import {
  toggleSortByStars,
  toggleSortByLikes,
  resetSorting,
} from "../../containers/App/actions";
import { connect } from "react-redux";
import { compose } from "redux";
import { useHistory } from "react-router-dom";

const Movies = (props) => {
  const {
    toggleSortByLikes,
    toggleSortByStars,
    resetSorting,
    words,
  } = props;
  const {
    "app-sorting-btn-likes": likesBtnTitle,
    "app-sorting-btn-rating": ratingTitle,
    "app-sorting-btn-reset": resetTitle,
    "app-sorting-btn-add-movie": addMovieTitle,
    "app-sorting-title": sortingTitle,
    "app-search-bar-placeholder": searchTitle,
    "movie-likes": likeTitle,
  } = words;

  const history = useHistory()

  const handleNewMovie = () => {
    history.push("/add-movie");
  };

  return (
    <>
      <section className={styles.sorting}>
        <h2>{sortingTitle}</h2>
        <div className={styles.buttonContainer}>
          <Button title={likesBtnTitle} handleClick={toggleSortByLikes} />
          <Button title={ratingTitle} handleClick={toggleSortByStars} />
          <Button title={resetTitle} handleClick={resetSorting} />
          <Button title={addMovieTitle} handleClick={handleNewMovie} />
        </div>
        <SearchBar searchTitle={searchTitle} />
      </section>
      <div className={styles.movies}>
        <>
          <section className={styles.moviePreviewContainer}>
            <MoviePreviewContainer
              likeTitle={likeTitle}
            />
          </section>
        </>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  toggleSortByStars,
  toggleSortByLikes,
  resetSorting,
};

const withConnect = connect(null, mapDispatchToProps);

export default compose(withTranslate, withConnect)(Movies);

Movies.propTypes = {
  defaultMovies: PropTypes.arrayOf(movieShape),
};
