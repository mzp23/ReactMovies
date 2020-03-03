import React from "react";
import styles from "./styles.module.scss";
import { Routes } from "../../constants";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className={styles.wrapper}>
      <h1>PAGE NOT FOUND</h1>
      <Link className={styles.link} to={Routes.HOMEPAGE}>
        Go to homepage
      </Link>
    </div>
  );
};

export default PageNotFound;
