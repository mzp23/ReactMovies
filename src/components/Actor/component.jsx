import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import Navigation from "../Navigation/component";
const Actor = props => {
  const { img, name, biography, handleLogOut } = props;
  return (
    <>
      <Navigation handleLogOut={handleLogOut} />
      <div className={styles.wrapper}>
        <img className={styles.img} src={img} alt={name} />
        <p className={styles.text}>Name: {name}</p>
        <p className={styles.text}>Biography: {biography}</p>
      </div>
    </>
  );
};

export default Actor;

Actor.propTypes = {
  biography: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};