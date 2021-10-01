import { createSelector } from "reselect";

const usersSelector = (state) => state.users;

export const getSignedIn = createSelector(
  [usersSelector],
  state => state.isSignedIn
);

export const getUserId = createSelector(
  [usersSelector],
  state => state.uid
)

export const getCompanySetting = createSelector(
  [usersSelector],
  state => state.company
);