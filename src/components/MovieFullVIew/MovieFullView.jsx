import React from 'react';
import styles from './MovieFullView.module.scss';
const MovieFullView = () => {
    return (
        <section className={styles.movie_full_view}>
            <h3 className={styles.movie_full_view_title}>
                There is no film to show info, choose some film to see details
            </h3>
        </section>
    );
};

export default MovieFullView;