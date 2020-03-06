import React, {Component} from 'react';
import LoginForm from "../../components/LoginForm/component";
import {fetchLogin, userLogin} from "./actions";
import {connect} from "react-redux";


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
        console.log(1);
        const {fetchLogin, history} = this.props;
        const login = this.state.loginInput;
        const password = this.state.passwordInput;
        console.log(login);
        console.log(password);
        await fetchLogin(login, password);
        history.push('/movies');
    };

    render() {
        return (
          <LoginForm
              buttonTitle={"Login"}
              handleButton={this.handleButton}
              handleLogin={this.handleLogin}
              handlePassword={this.handlePassword}
              page={"login"}
              title={"Please login"}
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
export default withConnect(Login);