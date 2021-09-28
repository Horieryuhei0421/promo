import React from "react";
import { Switch, Route } from "react-router";
import {
  Top,
  SignUp,
  SignIn,
  AdviserPage,
  ComapanyPage,
  Reset,
  IssueEdit,
} from "./templates";
import Auth from "./Auth";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/top"} component={Top} />
      <Route exact path={"/signup"} component={SignUp} />
      <Route exact path={"/signin"} component={SignIn} />
      <Route exact path={"/signin/reset"} component={Reset} />
      <Auth>
        <Route exact path={"/adviserpage"} component={AdviserPage} />
        <Route exact path={"/companypage"} component={ComapanyPage} />
        <Route exact path={"/issue/edit"} component={IssueEdit} />
      </Auth>
    </Switch>
  );
};
export default Router;
