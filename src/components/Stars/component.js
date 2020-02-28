import React from "react";
import FilledStar from "../FilledStar/componetn";
import EmptyStar from "../EmptyStar/componetn";
import uuid from 'uuid';
import PropTypes from "prop-types";

const StarsRender = ({ stars, handleStar, movieId }) => {
  return (
    <div>
      {[...new Array(5)].map((elem, index) => {
        const star = index + 1;
             return (star <= stars ?
                 <FilledStar key={uuid()}  handleStar={handleStar} movieId={movieId} star={star}/>
                 :
                 <EmptyStar key={uuid()}  handleStar={handleStar} movieId={movieId} star={star} />);
      })}
    </div>
  );
};

export default StarsRender;

StarsRender.propTypes = {
  handleStar: PropTypes.func,
  movieId: PropTypes.number,
  stars: PropTypes.number,
};