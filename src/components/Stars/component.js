import React from "react";
import uuid from 'uuid';
import PropTypes from "prop-types";
import Star from '../Star/component';

const Stars = ({ stars, handleStar, movieId }) => {
  return (
    <div>
      {[...new Array(5)].map((elem, index) => {
        const star = index + 1;
        return (
            <Star
                key={uuid()}
                handleStar={handleStar}
                movieId={movieId}
                star={star}
                isFilled={star <= stars}
            />
        );
      })}
    </div>
  );
};

export default Stars;

Stars.propTypes = {
  handleStar: PropTypes.func,
  movieId: PropTypes.number,
  stars: PropTypes.number,
};