import React from "react";
import FilledStar from "../FilledStar/componetn";
import EmptyStar from "../EmptyStar/componetn";

const MyComponent = props => {
  const { handleStar, movieId, star, isFilled} = props;
  return isFilled ? (
    <FilledStar
      handleStar={handleStar}
      movieId={movieId}
      star={star}
    />
  ) : (
    <EmptyStar
      handleStar={handleStar}
      movieId={movieId}
      star={star}
    />
  );
};

export default MyComponent;
