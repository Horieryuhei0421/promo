import React from "react";
import { Switch, Route } from "react-router";
import {
  Top,
  SignUp,
  SignIn,
  AdviserPage,
  ComapanyPage,
  CompanySetting,
  Reset,
  IssueEdit,
  IssueDetail,
  Sales,
  Notice,
  History,
  Profile,
  CheckList,
  MyIssueList,
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
        <Route exact path={"/sales"} component={Sales} />
        <Route exact path={"/notice"} component={Notice} />
        <Route exact path={"/profile"} component={Profile} />
        <Route exact path={"/checklist"} component={CheckList} />
        <Route exact path={"/history"} component={History} />
        <Route exact path={"/companypage"} component={ComapanyPage} />
        <Route exact path={"/companysetting"} component={CompanySetting} />
        <Route exact path={"/issues/:id"} component={IssueDetail} />
        <Route exact path={"/myissuelist"} component={MyIssueList} />
        <Route exact path={"/issue/edit"} component={IssueEdit} />
        <Route exact path={"/issue/edit/:id"} component={IssueEdit} />
      </Auth>
    </Switch>
  );
};
export default Router;
