import React from 'react';
import styles from './MoviePreview.module.scss';
import StarsRender from "../../helpers/starsRenders";
import Likes from "../Likes/component";
const MoviePreview = ({title, likes, stars, poster, handleStar, handleLike, movieId, handleTitle}) => {

    return (

        <div className={styles.movie_preview_card}>
            <h3 className={styles.movie_preview_title} onClick={() => handleTitle(movieId)} >{title}</h3>
            <img className={styles.movie_preview_poster} src={poster} alt={title}/>
                <StarsRender stars={stars} handleStar={handleStar} movieId={movieId}/>
            <div>
                <Likes likes={likes} handleLike={handleLike} movieId={movieId}/>
            </div>
        </div>
    );
};

export default MoviePreview;