import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
const Actor = ({ img, name, biography, words, nameTitle, biographyTitle }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <img className={styles.img} src={img} alt={name} />
        <p className={styles.text}>
          {nameTitle}: {name}
        </p>
        <p className={styles.text}>
          {biographyTitle}: {biography}
        </p>
      </div>
    </>
  );
};

export default Actor;

Actor.propTypes = {
  biography: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
