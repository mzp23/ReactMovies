import React from 'react';
import styles from './MovieFullView.module.scss';
import MoviesFullViewRender from '../MoviesFullViewRender/MoviesFullViewRender';

const MovieFullView = ({movie, handleLike, handleStar}) => {
    return (
        <section className={styles.movie_full_view}>
            {
                movie ?
                   <MoviesFullViewRender movie={movie} handleLike={handleLike} handleStar={handleStar} />
                    :
                    <h3 className={styles.movie_full_view_title}>
                    Click on the film title to show full description
                     </h3>
            }

        </section>
    );
};

export default MovieFullView;