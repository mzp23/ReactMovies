import React from 'react';
import styles from "../Stars/style.module.scss";
import PropTypes from 'prop-types';
import uuid from "uuid";

const EmptyStar = ({handleStar,movieId,star}) => {
    return (
        <span
            className={styles.stars}
            onClick={() => handleStar(movieId, star)}
            key={uuid()}
            role="img"
            aria-label="gold star"
        >
            &#x2606;
          </span>
    );
};

export default EmptyStar;

EmptyStar.propTypes = {
    handleStar: PropTypes.func,
    movieId: PropTypes.number,
    star: PropTypes.number,
};