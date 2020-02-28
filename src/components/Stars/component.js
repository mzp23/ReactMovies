import uuid from "uuid";
import React from "react";
import styles from "./style.module.scss";

const StarsRender = ({ stars, handleStar, movieId }) => {
  return (
    <div>
      {[...new Array(5)].map((elem, index) => {
        const star = index + 1;
        const goldStar = (
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
        const emptyStar = (
          <span
            className={styles.stars}
            onClick={() => handleStar(movieId, star)}
            key={uuid()}
            role="img"
            aria-label="empty star"
          >
            &#x2606;
          </span>
        );

        return (star <= stars ? goldStar : emptyStar);
      })}
    </div>
  );
};

export default StarsRender;
