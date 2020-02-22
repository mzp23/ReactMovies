import React from 'react';
import styles from './MovieFullView.module.scss';
const MovieFullView = () => {
    return (
        <section className={styles.movie_full_view}>
            <h3 className={styles.movie_full_view_title}>
                Click on the film title to show full description
            </h3>
        </section>
    );
};

export default MovieFullView;