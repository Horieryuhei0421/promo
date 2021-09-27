import { createSelector } from "reselect";

const issuesSelector = (state) => state.issues;

export const getIssues = createSelector(
  [issuesSelector],
  state => state.list
);