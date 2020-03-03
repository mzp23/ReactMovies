import React, {Component} from 'react';
import LoginForm from "../../components/LoginForm/component";
import {userLogin} from "./actions";
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

    handleButton = (e) => {
        e.preventDefault();
        const {userLogin, history} = this.props;
        const login = this.state.loginInput;
        const isUserExist = localStorage.getItem(`user=${login}`) && true;
        if(!isUserExist) {
            return alert('This user does\'t exist');
        }

        const isCorrectPassword =
            localStorage.getItem(`user=${this.state.loginInput}`) === `password=${this.state.passwordInput}`;
        if(!isCorrectPassword) {
            return alert('Wrong password');
        }
        userLogin({user: this.state.loginInput});
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
    userLogin
};

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
);
export default withConnect(Login);