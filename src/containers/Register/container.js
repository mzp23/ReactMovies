import React from "react";
import LoginForm from "../LoginForm/container";
import { connect } from "react-redux";
import { fetchRegister, userLogin } from "../Login/actions";
import { withRouter, useHistory } from "react-router-dom";
import withTranslate from "../../hoc/withTranslation";
import { compose } from "redux";
const Register = ({ fetchRegister, words }) => {
  const history = useHistory();

  const registerUser = async (e, values) => {
    e.preventDefault();
    const { login, password } = values;
    await fetchRegister(login, password);
    history.push("/movies");
  };

  return (
    <LoginForm
      handleButton={(e, values) => registerUser(e, values)}
      page={"register"}
      words={words}
      history={history}
    />
  );
};

const mapDispatchToProps = {
  userLogin,
  fetchRegister,
};

const withConnect = connect(null, mapDispatchToProps);

export default compose(withRouter, withTranslate, withConnect)(Register);
