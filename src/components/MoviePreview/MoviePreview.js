import React from 'react';
import styles from './MoviePreview.module.scss';
import {starsRender} from "../../helpers/starsRenders";
const MoviePreview = ({title, likes, stars, poster}) => {

    return (

        <div className={styles.movie_preview_card}>
            <h3 className={styles.movie_preview_title}>{title}</h3>
            <img className={styles.movie_preview_poster} src={poster} alt={title}/>
            { starsRender(stars, stars)}
        </div>
    );
};

export default MoviePreview;