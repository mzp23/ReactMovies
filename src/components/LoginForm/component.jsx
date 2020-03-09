import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/component";
import { Link } from "react-router-dom";
import { Routes } from "../../constants";

import styles from "./styles.module.scss";
import withTranslate from "../../hoc/withTranslation";

const LoginForm = props => {
  const { handleButton, handlePassword, handleLogin, words } = props;
  const page = props.page === "login" ? "login" : "register";
  const to = props.page === "login" ? "REGISTER" : "LOGIN";
  const textToRender = (
    <p>
      {words[`${page}-text`]}{" "}
      {
        <Link className={styles.link} to={Routes[to]}>
          {words[`${page}-link-text`]}
        </Link>
      }
    </p>
  );

  return (
    <form className={styles.form}>
      <h2>{words[`${page}-h2-title`]}</h2>
      <input
        id={"login"}
        className={styles.input}
        type="text"
        placeholder={words["login-form-input-name-placeholder"]}
        onChange={handleLogin}
      />
      <input
        id={"password"}
        className={styles.input}
        type="password"
        placeholder={words["login-form-input-password-placeholder"]}
        onChange={handlePassword}
      />
      <Button
        handleClick={e => handleButton(e)}
        title={words[`${page}-btn-title`]}
      />
      {textToRender}
    </form>
  );
};

export default withTranslate(LoginForm);

LoginForm.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  handleButton: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
