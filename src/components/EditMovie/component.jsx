import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import Button from "../Button/component";
import Input from "../Input/component";
import Navigation from "../Navigation/component";
import withTranslate from "../../hoc/withTranslation";

const EditMovie = props => {
  const {
    title,
    posterUrl,
    director,
    genres,
    description,
    handleTitle,
    handlePoster,
    handleDirector,
    handleGenres,
    handleDescription,
    handleSubmit,
    handleLogOut,
    words
  } = props;

  const movieID = props.moviesToRender[props.movieToShowDescription].id;
  const goBack = e => {
    e.preventDefault();
    props.history.goBack();
  };

  const {
    "form-edit-or-add-movie-input-title": editTitle,
    "form-edit-or-add-movie-input-img": imgTitle,
    "form-edit-or-add-movie-input-director": directorTitle,
    "form-edit-or-add-movie-input-genres": genresTitle,
    "form-edit-or-add-movie-input-description": descriptionTitle,
    "navigation-menu-link-homepage": homepage,
    "navigation-logout-btn": logOutTitle,
    "form-edit-or-add-movie-btn-submit": submitTitle,
    "form-edit-or-add-movie-btn-go-back": goBackTitle,
  } = words;

  return (
    <>
      <Navigation
        handleLogOut={handleLogOut}
        logOutTitle={logOutTitle}
        homepage={homepage}
      />
      <form className={styles.form}>
        <Input
          id={"editMovieTitle"}
          labelTitle={editTitle}
          value={title}
          type={"text"}
          onChange={handleTitle}
        />
        <Input
          id={"editMovieImgUrl"}
          labelTitle={imgTitle}
          value={posterUrl}
          type={"text"}
          onChange={handlePoster}
        />
        <Input
          id={"editMovieDirector"}
          labelTitle={directorTitle}
          value={director}
          type={"text"}
          onChange={handleDirector}
        />
        <Input
          id={"editMovieGenres"}
          labelTitle={genresTitle}
          value={genres}
          type={"text"}
          onChange={handleGenres}
        />
        <Input
          id={"editMovieDescription"}
          labelTitle={descriptionTitle}
          value={description}
          type={"textarea"}
          onChange={handleDescription}
        />

        <div>
          <Button
            handleClick={event => handleSubmit(movieID, event)}
            title={submitTitle}
          />
          <Button handleClick={goBack} title={goBackTitle} />
        </div>
      </form>
    </>
  );
};

export default withTranslate(EditMovie);

EditMovie.propTypes = {
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  posterUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
