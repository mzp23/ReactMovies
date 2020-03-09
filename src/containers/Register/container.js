import React, {Component} from 'react';
import LoginForm from "../../components/LoginForm/component";
import {connect} from "react-redux";
import {fetchRegister, userLogin} from "../Login/actions";
import {withRouter} from 'react-router-dom';
import withTranslate from "../../hoc/withTranslation";
import {compose} from "redux";
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

    registerUser = async (e) => {
        const {history, fetchRegister} = this.props;
        e.preventDefault();
        const {loginInput : login, passwordInput: password} = this.state;
        await fetchRegister(login, password);
        history.push('/movies');
    };

    render() {
        const {words} = this.props;
        return (
            <LoginForm
                handleButton={(e) => this.registerUser(e)}
                page={"register"}
                handleLogin={this.handleLogin}
                handlePassword={this.handlePassword}
                words={words}
            />
        );
    }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {
    userLogin,
    fetchRegister
};

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default compose(withRouter,withTranslate,withConnect)(Register);
