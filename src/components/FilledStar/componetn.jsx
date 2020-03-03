import React from 'react';
import styles from "../Stars/style.module.scss";
import uuid from "uuid";
import PropTypes from "prop-types";

const FilledStar = ({handleStar,movieId,star}) => {
    return (
            <span
                className={styles.stars}
                onClick={() => handleStar(movieId, star)}
                key={uuid()}
                role="img"
                aria-label="gold star"
            >
            &#11088;
          </span>
    );
};

export default FilledStar;

FilledStar.propTypes = {
    handleStar: PropTypes.func,
    movieId: PropTypes.number,
    star: PropTypes.number,
};