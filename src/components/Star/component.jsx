import React from "react";
import uuid from "uuid";

import styles from './style.module.scss';
import { connect } from "react-redux";
import { handleStars } from '../../containers/App/actions'


const Star = ({ handleStars, movieId, star, isFilled}) => {
  const starToRender = isFilled ? '⭐' : '☆';

  return (
    <span
      className={styles.stars}
      onClick={() => handleStars({movieId, star})}
      key={uuid()}
      role="img"
      aria-label="gold star"
    >
      {starToRender}
    </span>
  );
};

const mapDispatchToProps = {
  handleStars
}


export default connect(null, mapDispatchToProps)(Star);
