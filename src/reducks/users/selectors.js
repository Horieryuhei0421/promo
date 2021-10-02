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

export const getUserName = createSelector(
  [usersSelector],
  state => state.username
)

export const getCompanyName = createSelector(
  [usersSelector],
  state => state.companyname
)

export const getCompanyAddress = createSelector(
  [usersSelector],
  state => state.companyaddress
)
export const getCompanyTel = createSelector(
  [usersSelector],
  state => state.companytel
)
export const getCompanyDescription = createSelector(
  [usersSelector],
  state => state.companydescription
)
