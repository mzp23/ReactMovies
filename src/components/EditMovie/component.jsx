import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import Button from "../Button/component";
import Input from "../Input/component";
import Navigation from "../Navigation/component";

const EditMovie = props => {
  const {
    title, posterUrl, director, genres, description, handleTitle, handlePoster, handleDirector, handleGenres,
    handleDescription, handleSubmit, handleLogOut } = props;

  const movieID = props.moviesToRender[props.movieToShowDescription].id;
  const goBack = e => {
    e.preventDefault();
    props.history.goBack();
  };

  return (
    <>
      <Navigation handleLogOut={handleLogOut} />
      <form className={styles.form}>
        <Input
          id={"editMovieTitle"}
          labelTitle={"Title"}
          value={title}
          type={"text"}
          onChange={handleTitle}
        />
        <Input
          id={"editMovieImgUrl"}
          labelTitle={"Img url"}
          value={posterUrl}
          type={"text"}
          onChange={handlePoster}
        />
        <Input
          id={"editMovieDirector"}
          labelTitle={"Director"}
          value={director}
          type={"text"}
          onChange={handleDirector}
        />
        <Input
          id={"editMovieGenres"}
          labelTitle={"Genres"}
          value={genres}
          type={"text"}
          onChange={handleGenres}
        />
        <Input
          id={"editMovieDescription"}
          labelTitle={"Description"}
          value={description}
          type={"textarea"}
          onChange={handleDescription}
        />

        <div>
          <Button
            handleClick={event => handleSubmit(movieID, event)}
            title={"Submit"}
          />
          <Button handleClick={goBack} title={"Go back"} />
        </div>
      </form>
    </>
  );
};

export default EditMovie;

EditMovie.propTypes = {
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  posterUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};