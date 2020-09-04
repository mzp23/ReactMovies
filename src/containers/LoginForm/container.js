import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Routes } from "../../constants";
import { reduxForm, Field, getFormValues } from "redux-form";

import styles from "./styles.module.scss";
import withTranslate from "../../hoc/withTranslation";
import { compose } from "redux";
import { connect } from "react-redux";
import Button from "../../components/Button/component";

const LoginForm = ({ handleButton, words, page, values }) => {
    const pageToRender = page === "login" ? "login" : "register";
    const to = page === "login" ? "REGISTER" : "LOGIN";
    const textToRender = (
      <p>
        {words[`${pageToRender}-text`]}{" "}
        {
          <Link className={styles.link} to={Routes[to]}>
            {words[`${pageToRender}-link-text`]}
          </Link>
        }
      </p>
    );

    return (
      <form className={styles.form} onSubmit={handleButton}>
        <h2>{words[`${pageToRender}-h2-title`]}</h2>
        <Field
          id={"login"}
          name="login"
          className={styles.input}
          type="text"
          component="input"
          placeholder={words["login-form-input-name-placeholder"]}
        />
        <Field
          id={"password"}
          className={styles.input}
          name="password"
          type="password"
          component="input"
          placeholder={words["login-form-input-password-placeholder"]}
        />
        <Button
          handleClick={e => handleButton(e, values)}
          title={words[`${pageToRender}-btn-title`]}
          type="submit"
        />
        {textToRender}
      </form>
    );
  }

const mapStateToProps = state => ({
  values: getFormValues("login-form")(state)
});

const withConnect = connect(mapStateToProps);

export default compose(
  reduxForm({ form: "login-form" }),
  withTranslate,
  withConnect
)(LoginForm);

LoginForm.propTypes = {
  handleButton: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
  title: PropTypes.string
};
