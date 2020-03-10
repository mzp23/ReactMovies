import React, { Component } from "react";
import LoginForm from "../LoginForm/container";
import { connect } from "react-redux";
import { fetchRegister, userLogin } from "../Login/actions";
import { withRouter } from "react-router-dom";
import withTranslate from "../../hoc/withTranslation";
import { compose } from "redux";
class Register extends Component {
  registerUser = async (e, values) => {
    const { history, fetchRegister } = this.props;
    e.preventDefault();
    const { login, password } = values;
    await fetchRegister(login, password);
    history.push("/movies");
  };

  render() {
    const { words, history } = this.props;
    return (
      <LoginForm
        handleButton={(e, values) => this.registerUser(e, values)}
        page={"register"}
        handleLogin={this.handleLogin}
        handlePassword={this.handlePassword}
        words={words}
        history={history}
      />
    );
  }
}
const mapDispatchToProps = {
  userLogin,
  fetchRegister
};

const withConnect = connect(null, mapDispatchToProps);

export default compose(withRouter, withTranslate, withConnect)(Register);
