import React, {Component} from 'react';
import LoginForm from "../../components/LoginForm/component";
import {connect} from "react-redux";
import {userLogin} from "../Login/actions";
import {withRouter} from 'react-router-dom';
class Register extends Component {
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

    registerUser = (e) => {
        const {userLogin, history} = this.props;
        e.preventDefault();
        const login = this.state.loginInput;
        const isUserExist = localStorage.getItem(`user=${login}`) && true;
        if(isUserExist) {
            return alert('This user already exist');
        }

        localStorage.setItem(`user=${this.state.loginInput}`, `password=${this.state.passwordInput}`);
        userLogin({user: this.state.loginInput});
        history.push('/movies');
    };

    render() {
        return (
            <LoginForm
                buttonTitle={"Register"}
                handleButton={(e) => this.registerUser(e)}
                page={"register"}
                title={"Please register"}
                handleLogin={this.handleLogin}
                handlePassword={this.handlePassword}
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

export default withRouter(withConnect(Register));
