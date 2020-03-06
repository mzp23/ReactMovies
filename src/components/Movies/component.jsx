import PropTypes from "prop-types";
import React from "react";
import Navigation from "../Navigation/component";
import styles from "../../containers/App/styles.module.scss";
import Button from "../Button/component";
import SearchBar from "../../containers/SearchBar/container";
import MoviePreviewContainer from "../../containers/MoviePreview/container";
import { movieShape } from "../../helpers/propTypeShapes";

const Movies = props => {
  const { handleStar, handleLike, handleTitle, defaultMovies, sortMoviesByLikes, sortMoviesByStars,
         resetFilters, handleSearchResult, handleLogOut, handleNewMovie } = props;
  return (
    <>
      <Navigation handleLogOut={handleLogOut} />
      <section className={styles.sorting}>
        <h2>Sort movies</h2>
        <div className={styles.buttonContainer}>
          <Button title="by likes" handleClick={sortMoviesByLikes} />
          <Button title="by rating" handleClick={sortMoviesByStars} />
          <Button title="reset" handleClick={resetFilters} />
          <Button title="add new movie" handleClick={handleNewMovie} />
        </div>
        <SearchBar
          handleSearchResult={handleSearchResult}
          movies={defaultMovies}
        />
      </section>
      <div className={styles.movies}>
          <>
            <section className={styles.moviePreviewContainer}>
              <MoviePreviewContainer
                handleStar={handleStar}
                handleLike={handleLike}
                handleTitle={handleTitle}
              />
            </section>
          </>
      </div>
    </>
  );
};

export default Movies;

Movies.propTypes = {
  defaultMovies: PropTypes.arrayOf(movieShape),
  handleLike: PropTypes.func.isRequired,
  handleStar: PropTypes.func.isRequired,
  handleTitle: PropTypes.func.isRequired,
};