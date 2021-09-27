import React from "react";
import { Switch, Route } from "react-router";
import {
  SignUp,
  SignIn,
  Home,
  AdviserPage,
  ComapanyPage,
  Reset,
} from "./templates";
import Auth from "./Auth";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/signup"} component={SignUp} />
      <Route exact path={"/signin"} component={SignIn} />
      <Route exact path={"/signin/reset"} component={Reset} />
      <Auth>
        <Route exact path={"(/)?"} component={Home} />
        <Route exact path={"/adviserpage"} component={AdviserPage} />
        <Route exact path={"/companypage"} component={ComapanyPage} />
      </Auth>
    </Switch>
  );
};
export default Router;
