import React from 'react';
import styles from "./styles.module.scss";
import Likes from "../Likes/component";
import StarsRender from "../../helpers/starsRenders";
import RenderSpan from "../RenderSpan/renderSpan";

const MoviesFullViewRender = ({movie, handleLike, handleStar}) => {
    const {likes, id, title, stars, posterUrl, director, actors, genres, description} = movie;

    return (
        <>
            <div className={styles.sub_info}>
                <h3 className={styles.title}>
                    {title}
                </h3>
                <Likes movieId={id} handleLike={handleLike} likes={likes}/>
                <StarsRender movieId={id} stars={stars} handleStar={handleStar}/>
            </div>
            <div className={styles.full_info}>
                <img src={posterUrl} alt={title} className={styles.poster}/>
                <p>Director: {director}</p>
                <p>Actors: <RenderSpan array={actors}/> </p>
                <p>Genres: <RenderSpan array={genres}/> </p>
                <p>Description: {description}</p>
            </div>
        </>
    );
};

export default MoviesFullViewRender;