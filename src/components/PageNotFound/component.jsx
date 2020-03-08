import React from "react";
import styles from "./styles.module.scss";
import { Routes } from "../../constants";
import { Link } from "react-router-dom";
import withTranslate from "../../hoc/withTranslation";

const PageNotFound = ({words}) => {
  return (
    <div className={styles.wrapper}>
      <h1>{words['page-not-found-title']}</h1>
      <Link className={styles.link} to={Routes.HOMEPAGE}>
        {words['page-not-found-link']}
      </Link>
    </div>
  );
};

export default withTranslate(PageNotFound);
