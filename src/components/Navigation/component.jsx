import React, { useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.scss";
import { Routes } from "../../constants";
import Button from "../Button/component";
import { connect } from "react-redux";
import { handleUserLogOut } from "../../containers/Login/actions";
import { compose } from "redux";
import withTranslate from "../../hoc/withTranslation";

const Navigation = React.memo(({ handleUserLogOut, words }) => {
  const {
    "navigation-logout-btn": logOutTitle,
    "navigation-menu-link-homepage": homepage,
  } = words;

  const location = useLocation();
  const memoizedHandleLogOut = useCallback(handleUserLogOut, []);

  if (location.pathname.match(/register|login/)){
    return null;
  }

  
  return (
    <nav>
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <Link to={Routes.MOVIES}>{homepage}</Link>
        </li>
        <li className={styles.navigationItem}>
          <Button handleClick={memoizedHandleLogOut} title={logOutTitle} />
        </li>
      </ul>
    </nav>
  );
});

const mapDispatchToPros = {
  handleUserLogOut,
};

const withConnect = connect(null, mapDispatchToPros);

export default compose(withTranslate, withConnect)(Navigation);
