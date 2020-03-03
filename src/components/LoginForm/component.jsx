import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/component";
import { Link } from "react-router-dom";
import { Routes } from "../../constants";

import styles from "./styles.module.scss";

const LoginForm = props => {
  const {
    title,
    handleButton,
    buttonTitle,
    page,
    handlePassword,
    handleLogin
  } = props;
  const loginText = (
    <p>
      Don't have an account?{" "}
      {
        <Link className={styles.link} to={Routes.REGISTER}>
          Go to Register page
        </Link>
      }
    </p>
  );
  const registerText = (
    <p>
      Already have an account?{" "}
      {
        <Link className={styles.link} to={Routes.LOGIN}>
          Go to Login page
        </Link>
      }
    </p>
  );

  return (
    <form className={styles.form}>
      <h2>{title}</h2>
      <input
        id={"login"}
        className={styles.input}
        type="text"
        placeholder="Enter your name"
        onChange={handleLogin}
      />
      <input
        id={"password"}
        className={styles.input}
        type="password"
        placeholder="Enter your password"
        onChange={handlePassword}
      />
      <Button handleClick={(e) => handleButton(e)} title={buttonTitle} />
      {page === "login" ? loginText : registerText}
    </form>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  handleButton: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};