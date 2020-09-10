import React from "react";
import { withRouter } from "react-router-dom";
import LanguageToggler from "../LanguageToggler/container";
import Navigation from "../../components/Navigation/component";
import AppRoutes from "../../Routes/routes";

const App = () => (
  <>
    <LanguageToggler />
    <Navigation />
    <AppRoutes />
  </>
);

export default withRouter(App);
