import React from "react";
import PropTypes from "prop-types";
import styles from "./style.module.scss";

const Button = ({ title, handleClick, type }) => {
  return (
    <button className={styles.button} onClick={handleClick} type={type? type : 'button'}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Button;
