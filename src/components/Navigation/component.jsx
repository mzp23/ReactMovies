import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { Routes } from "../../constants";
import Button from "../Button/component";

const Navigation = props => {
  const { handleLogOut, homepage, logOutTitle } = props;
  return (
    <nav>
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <Link to={Routes.HOMEPAGE}>{homepage}</Link>
        </li>
        <li className={styles.navigationItem}>
          <Button handleClick={handleLogOut} title={logOutTitle} />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
