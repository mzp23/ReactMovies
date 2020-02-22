import React from 'react';
import styles from './MoviePreview.module.scss';
import StarsRender from "../../helpers/starsRenders";
const MoviePreview = ({title, likes, stars, poster, handleStar, handleLike, movieId}) => {

    return (

        <div className={styles.movie_preview_card}>
            <h3 className={styles.movie_preview_title}>{title}</h3>
            <img className={styles.movie_preview_poster} src={poster} alt={title}/>
                <StarsRender stars={stars} handleStar={handleStar} movieId={movieId}/>
            <div>
                <p>Likes: {likes}
                <span className={styles.post_reaction} onClick={() => handleLike(movieId, likes + 1)} role="img" aria-label="like">&#128077;</span>
                <span className={styles.post_reaction} onClick={() => handleLike(movieId, likes - 1)} role="img" aria-label="dislike">&#128078;</span>
                </p>
            </div>
        </div>
    );
};

export default MoviePreview;