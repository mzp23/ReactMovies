import React, { Component } from "react";
import LoginForm from "../LoginForm/container";
import { fetchLogin, userLogin } from "./actions";
import { connect } from "react-redux";
import withTranslate from "../../hoc/withTranslation";
import { compose } from "redux";

class Login extends Component {
  state = {
    loginInput: "",
    passwordInput: ""
  };

  handleLogin = event => {
    this.setState({ loginInput: event.target.value });
  };

  handlePassword = event => {
    this.setState({ passwordInput: event.target.value });
  };

  handleButton = async (e, values) => {
    e.preventDefault();
    const { fetchLogin, history } = this.props;
    const {login, password} = values;
    await fetchLogin(login, password);
    history.push("/movies");
  };

  render() {
    const { words } = this.props;
    return (
      <LoginForm
        buttonTitle={words["login-btn-title"]}
        handleButton={this.handleButton}
        handleLogin={this.handleLogin}
        handlePassword={this.handlePassword}
        loginPlaceholder={words["login-form-input-name-placeholder"]}
        passwordPlaceholder={words["login-form-input-name-placeholder"]}
        page={"login"}
        loginTitle={words["login-h2-title"]}
        loginLink={words["login-link-text"]}
        loginText={words["login-text"]}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  userLogin,
  fetchLogin
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withTranslate, withConnect)(Login);
