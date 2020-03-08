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
    handleLogin,
    words
  } = props;
  const loginText = (
    <p>
        {words['login-text']}{" "}
      {
        <Link className={styles.link} to={Routes.REGISTER}>
            {words['login-link-text']}
        </Link>
      }
    </p>
  );
  const registerText = (
    <p>
        {words['register-text']}{" "}
      {
        <Link className={styles.link} to={Routes.LOGIN}>
            {words['register-link-text']}
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
        placeholder={words['login-form-input-name-placeholder']}
        onChange={handleLogin}
      />
      <input
        id={"password"}
        className={styles.input}
        type="password"
        placeholder={words['login-form-input-password-placeholder']}
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