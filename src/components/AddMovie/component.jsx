import React from "react";
import styles from "./styles.module.scss";
import Button from "../Button/component";
import Input from "../Input/component";
import Navigation from "../Navigation/component";
import uuid from "uuid";

const AddMovie = props => {
    const {
        title, posterUrl, director, genres, description, handleTitle, handlePoster, handleDirector, handleGenres,
        handleDescription, handleSubmit, handleLogOut} = props;


    const movieID = uuid();
    const goBack = e => {
        e.preventDefault();
        props.history.goBack();
    };

    return (
        <>
            <Navigation handleLogOut={handleLogOut} />
            <form className={styles.form}>
                <Input
                    id={"addMovieTitle"}
                    labelTitle={"Title"}
                    value={title}
                    type={"text"}
                    onChange={(e) => handleTitle(e)}
                />
                <Input
                    id={"addMovieImgUrl"}
                    labelTitle={"Img url"}
                    value={posterUrl}
                    type={"text"}
                    onChange={handlePoster}
                />
                <Input
                    id={"addMovieDirector"}
                    labelTitle={"Director"}
                    value={director}
                    type={"text"}
                    onChange={handleDirector}
                />
                <Input
                    id={"addMovieGenres"}
                    labelTitle={"Genres"}
                    value={genres}
                    type={"text"}
                    onChange={handleGenres}
                />
                <Input
                    id={"addMovieDescription"}
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

export default AddMovie;

