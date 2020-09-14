import React from "react";
import PropTypes from "prop-types";
import styles from "./style.module.scss";

const Button = React.memo(({ title, handleClick, type, ...rest }) => {
  return (
    <button className={styles.button} onClick={handleClick} type={type? type : 'button'} {...rest}>
      {title}
    </button>
  );
});

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Button;
