import PropTypes from "prop-types";
import React from "react";
import Navigation from "../Navigation/component";
import styles from "../../containers/App/styles.module.scss";
import Button from "../Button/component";
import SearchBar from "../../containers/SearchBar/container";
import MoviePreviewContainer from "../../containers/MoviePreview/container";
import { movieShape } from "../../helpers/propTypeShapes";
import withTranslate from "../../hoc/withTranslation";

const Movies = props => {
  const {
    handleStar,
    handleLike,
    handleTitle,
    defaultMovies,
    sortMoviesByLikes,
    sortMoviesByStars,
    resetFilters,
    handleSearchResult,
    handleLogOut,
    handleNewMovie,
    words
  } = props;
  const {
    "app-sorting-btn-likes": likesBtnTitle,
    "app-sorting-btn-rating": ratingTitle,
    "app-sorting-btn-reset": resetTitle,
    "app-sorting-btn-add-movie": addMovieTitle,
    "app-sorting-title": sortingTitle,
    "app-search-bar-placeholder": searchTitle,
    "navigation-logout-btn": logOutTitle,
    "navigation-menu-link-homepage": homepage,
    "movie-likes": likeTitle,
  } = words;
  return (
    <>
      <Navigation
        handleLogOut={handleLogOut}
        logOutTitle={logOutTitle}
        homepage={homepage}
      />
      <section className={styles.sorting}>
        <h2>{sortingTitle}</h2>
        <div className={styles.buttonContainer}>
          <Button title={likesBtnTitle} handleClick={sortMoviesByLikes} />
          <Button title={ratingTitle} handleClick={sortMoviesByStars} />
          <Button title={resetTitle} handleClick={resetFilters} />
          <Button title={addMovieTitle} handleClick={handleNewMovie} />
        </div>
        <SearchBar
          handleSearchResult={handleSearchResult}
          movies={defaultMovies}
          searchTitle={searchTitle}
        />
      </section>
      <div className={styles.movies}>
        <>
          <section className={styles.moviePreviewContainer}>
            <MoviePreviewContainer
              handleStar={handleStar}
              handleLike={handleLike}
              handleTitle={handleTitle}
              likeTitle={likeTitle}
            />
          </section>
        </>
      </div>
    </>
  );
};

export default withTranslate(Movies);

Movies.propTypes = {
  defaultMovies: PropTypes.arrayOf(movieShape),
  handleLike: PropTypes.func.isRequired,
  handleStar: PropTypes.func.isRequired,
  handleTitle: PropTypes.func.isRequired
};
