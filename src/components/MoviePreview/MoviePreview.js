import React from 'react';
import styles from './MoviePreview.module.scss';

const MoviePreview = ({title, likes, stars, poster}) => {
    return (
        <div className={styles.movie_preview_card}>
            <h3 className={styles.movie_preview_title}>{title}</h3>
            <img className={styles.movie_preview_poster} src={poster} alt={title}/>
            <p>{likes}</p>
            <p>{stars}</p>
        </div>
    );
};

export default MoviePreview;