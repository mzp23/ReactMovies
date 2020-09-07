import React from "react";
import { Routes } from "../constants";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedRoute = ({ user, component, ...props }) => {
  if (component) {
    const Component = component;
    return user ? <Component /> : <Redirect to={Routes.LOGIN} />;
  }
  return user ? <Route {...props} /> : <Redirect to={Routes.LOGIN} />;
};

const mapStateToProps = ({ loginReducer }) => ({
  user: loginReducer.user,
});

export default connect(mapStateToProps)(ProtectedRoute);