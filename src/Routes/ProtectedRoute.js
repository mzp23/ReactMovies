import React from "react";
import { Routes } from "../constants";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedRoute = ({ user, component }) => {
    const Component = component;

    return user ? <Component /> : <Redirect to={Routes.LOGIN} />;
};

const mapStateToProps = ({ loginReducer }) => ({
  user: loginReducer.user,
});

export default connect(mapStateToProps)(ProtectedRoute);