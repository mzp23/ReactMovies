import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { Routes } from "../../constants";
import Button from "../Button/component";

const Navigation = props => {
  const { handleLogOut } = props;
  return (
    <nav>
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <Link to={Routes.HOMEPAGE}>Movies</Link>
        </li>
        <li className={styles.navigationItem}>
          <Button handleClick={handleLogOut} title={"Log out"} />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
