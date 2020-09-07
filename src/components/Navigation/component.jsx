import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { Routes } from "../../constants";
import Button from "../Button/component";
import { connect } from "react-redux";
import { handleUserLogOut } from '../../containers/Login/actions'


const Navigation = ({ handleUserLogOut, homepage, logOutTitle }) => {
  return (
    <nav>
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <Link to={Routes.HOMEPAGE}>{homepage}</Link>
        </li>
        <li className={styles.navigationItem}>
          <Button handleClick={handleUserLogOut} title={logOutTitle} />
        </li>
      </ul>
    </nav>
  );
};

const mapDispatchToPros = {
  handleUserLogOut
}

export default connect(null, mapDispatchToPros)(Navigation);
