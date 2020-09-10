import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../containers/Login/container";
import Register from "../containers/Register/container";
import PageNotFound from "../components/PageNotFound/component";
import ProtectedRoute from "./ProtectedRoute";
import EditMovieContainer from "../containers/EditMovieContainer/container";
import ActorContainer from "../containers/ActorContainer/container";
import AddMovieContainer from "../containers/AddNewMovieContainer/container";
import Movies from "../components/Movies/component";
import MovieFullView from "../components/MovieFullView/component";

import { Routes } from "../constants";

const AppRoutes = () => (
  <Switch>
    <Route path={Routes.LOGIN} component={Login} />
    <Route path={Routes.REGISTER} component={Register} />
    <ProtectedRoute path={Routes.EDIT_MOVIE} component={EditMovieContainer} />
    <ProtectedRoute exact path={Routes.HOMEPAGE} component={Movies} />
    <ProtectedRoute exact path={Routes.MOVIES} component={Movies} />
    <ProtectedRoute exact path={Routes.MOVIE} component={MovieFullView} />
    <ProtectedRoute exact path={Routes.ACTOR} component={ActorContainer} />
    <ProtectedRoute path={Routes.ADD_MOVIE} component={AddMovieContainer} />
    <Route path={"**"} component={PageNotFound} />
  </Switch>
);

export default AppRoutes;
