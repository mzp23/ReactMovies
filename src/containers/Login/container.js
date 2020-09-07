import React from "react";
import { useHistory } from "react-router-dom";
import LoginForm from "../LoginForm/container";
import { fetchLogin, userLogin } from "./actions";
import { connect } from "react-redux";
import withTranslate from "../../hoc/withTranslation";
import { compose } from "redux";

const Login = ({ fetchLogin, words }) => {
  const history = useHistory();

  const handleButton = async (e, values) => {
    e.preventDefault();
    const {login, password} = values;
    await fetchLogin(login, password);
    history.push("/movies");
  };

  return (
    <LoginForm
      buttonTitle={words["login-btn-title"]}
      handleButton={handleButton}
      loginPlaceholder={words["login-form-input-name-placeholder"]}
      passwordPlaceholder={words["login-form-input-name-placeholder"]}
      page={"login"}
      loginTitle={words["login-h2-title"]}
      loginLink={words["login-link-text"]}
      loginText={words["login-text"]}
    />
  );
};

const mapDispatchToProps = {
  userLogin,
  fetchLogin,
};

const withConnect = connect(null, mapDispatchToProps);
export default compose(withTranslate, withConnect)(Login);
