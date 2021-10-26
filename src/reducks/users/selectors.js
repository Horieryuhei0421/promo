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

export const getUserOrders = createSelector(
  [usersSelector],
  state => state.orders
)


export const getUserName = createSelector(
  [usersSelector],
  state => state.username
)

export const getUserProfession = createSelector(
  [usersSelector],
  state => state.profession
)

export const getUserBirthday = createSelector(
  [usersSelector],
  state => state.birthday
)

export const getUserMessage = createSelector(
  [usersSelector],
  state => state.message
)

export const getUserImage = createSelector(
  [usersSelector],
  state => state.image
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
export const getCompanyImage = createSelector(
  [usersSelector],
  state => state.companyimage
)

export const getOrdersHistory = createSelector(
  [usersSelector],
  state => state.orders
);