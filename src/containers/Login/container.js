import React, {Component} from 'react';
import LoginForm from "../../components/LoginForm/component";
import {fetchLogin, userLogin} from "./actions";
import {connect} from "react-redux";
import withTranslate from "../../hoc/withTranslation";

class Login extends Component {
    state = {
        loginInput: '',
        passwordInput: ''
    };

    handleLogin = (event) => {
        this.setState({loginInput: event.target.value})
    };

    handlePassword = (event) => {
        this.setState({passwordInput: event.target.value})
    };

    handleButton = async (e) => {
        e.preventDefault();
        const {fetchLogin, history} = this.props;
        const login = this.state.loginInput;
        const password = this.state.passwordInput;
        console.log(login);
        console.log(password);
        await fetchLogin(login, password);
        history.push('/movies');
    };

    render() {
        const {words} = this.props;
        return (
          <LoginForm
              buttonTitle={words['login-btn-title']}
              handleButton={this.handleButton}
              handleLogin={this.handleLogin}
              handlePassword={this.handlePassword}
              page={"login"}
              title={words['login-h2-title']}
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

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
);
export default  withTranslate(withConnect(Login));