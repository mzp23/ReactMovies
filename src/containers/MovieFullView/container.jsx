import React from 'react';
import styles from './style.module.scss';
import MoviesFullDescription from '../MoviesFullDescription/container';

const MovieFullView = ({movie, handleLike, handleStar}) => {
    return (
        <section className={styles.movie_full_view}>
            {
                movie ?
                   <MoviesFullDescription movie={movie} handleLike={handleLike} handleStar={handleStar} />
                    :
                    <h3 className={styles.movie_full_view_title}>
                    Click on the film title to show full description
                     </h3>
            }

        </section>
    );
};

export default MovieFullView;