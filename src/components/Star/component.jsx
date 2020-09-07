import React from "react";
import uuid from "uuid";

import styles from './style.module.scss';

const Star = ({ handleStar, movieId, star, isFilled}) => {
  const starToRender = isFilled ? '⭐' : '☆';

  return (
    <span
      className={styles.stars}
      onClick={() => handleStar(movieId, star)}
      key={uuid()}
      role="img"
      aria-label="gold star"
    >
      {starToRender}
    </span>
  );
};

export default Star;
