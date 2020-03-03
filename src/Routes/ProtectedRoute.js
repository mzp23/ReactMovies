import React from 'react';
import {Routes} from "../constants";
import {Redirect, Route} from "react-router-dom";

const ProtectedRoute = (props) => {
    const {user} = props;
    return user ? <Route {...props}/> : <Redirect to={Routes.LOGIN}/>
};

export default ProtectedRoute;
