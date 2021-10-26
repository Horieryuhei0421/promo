import * as Actions from "./actions"
import initialState from "../store/initialState"

export const UsersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case Actions.FETCH_ORDERS_HISTORY:
      return {
        ...state,
        orders: [...action.payload]
      };
    case Actions.SIGN_IN:
      return {
        ...state,
        ...action.payload,
      }
    case Actions.SIGN_OUT:
      return {
        ...initialState.users,
      };
    case Actions.COMPANY_ACTION:
      return {
        ...state,
        ...action.payload
      };
    case Actions.USER_ACTION:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state
  }

};
