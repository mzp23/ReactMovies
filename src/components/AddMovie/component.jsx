import React from "react";
import styles from "./styles.module.scss";
import Button from "../Button/component";
import Input from "../Input/component";
import Navigation from "../Navigation/component";
import uuid from "uuid";

const AddMovie = props => {
    const {
        title, posterUrl, director, genres, description, handleTitle, handlePoster, handleDirector, handleGenres,
        handleDescription, handleSubmit, handleLogOut, words} = props;
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

    const movieID = uuid();
    const goBack = e => {
        e.preventDefault();
        props.history.goBack();
    };

    return (
        <>
            <Navigation handleLogOut={handleLogOut} homepage={homepage} logOutTitle={logOutTitle}/>
            <form className={styles.form}>
                <Input
                    id={"addMovieTitle"}
                    labelTitle={editTitle}
                    value={title}
                    type={"text"}
                    onChange={(e) => handleTitle(e)}
                />
                <Input
                    id={"addMovieImgUrl"}
                    labelTitle={imgTitle}
                    value={posterUrl}
                    type={"text"}
                    onChange={handlePoster}
                />
                <Input
                    id={"addMovieDirector"}
                    labelTitle={directorTitle}
                    value={director}
                    type={"text"}
                    onChange={handleDirector}
                />
                <Input
                    id={"addMovieGenres"}
                    labelTitle={genresTitle}
                    value={genres}
                    type={"text"}
                    onChange={handleGenres}
                />
                <Input
                    id={"addMovieDescription"}
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

export default AddMovie;

