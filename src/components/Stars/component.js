import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid";
import styles from "./style.module.scss";
import Star from "../Star/component";

const Stars = React.memo(({ stars, movieId }) => (
    <div className={styles.wrapper}>
      {[...new Array(5)].map((_, index) => {
        const star = index + 1;
        return (
          <Star
            key={uuid()}
            movieId={movieId}
            star={star}
            isFilled={star <= stars}
          />
        );
      })}
    </div>
  )
);

export default Stars;

Stars.propTypes = {
  movieId: PropTypes.number,
  stars: PropTypes.number
};