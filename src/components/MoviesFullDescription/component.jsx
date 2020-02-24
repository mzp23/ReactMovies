import React from 'react';
import styles from "./styles.module.scss";
import Likes from "../Likes/component";
import Star from "../Stars/component";
import Span from "../Span/component";

const MoviesFullDescription = ({movie, handleLike, handleStar}) => {
    const {likes, id, title, stars, posterUrl, director, actors, genres, description} = movie;

    return (
        <>
            <div className={styles.sub_info}>
                <h3>
                    {title}
                </h3>
                <Likes movieId={id} handleLike={handleLike} likes={likes}/>
                <Star movieId={id} stars={stars} handleStar={handleStar}/>
            </div>
            <div className={styles.full_info}>
                <img src={posterUrl} alt={title} className={styles.poster}/>
                <p>Director: {director}</p>
                <p>Actors: <Span array={actors}/> </p>
                <p>Genres: <Span array={genres}/> </p>
                <p>Description: {description}</p>
            </div>
        </>
    );
};

export default MoviesFullDescription;