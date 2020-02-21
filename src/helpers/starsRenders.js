import uuid from "uuid";
import React from "react";
import styles from './stars.scss';

export const starsRender = (stars) => {
   return new Array(5).fill(null).map((elem, index) => {
        const goldStar = <span className={styles.stars} key={uuid()} role="img" aria-label="gold star" >&#11088;</span>;
        const emptyStar = <span className="stars" key={uuid()} role="img" aria-label="empty star">&#x2606;</span>;

        return elem = index + 1 <= stars ? goldStar : emptyStar;
    })
};