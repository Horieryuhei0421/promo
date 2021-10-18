import * as Actions from "./actions"
import initialState from "../store/initialState"

export const IssuesReducer = (state = initialState.issues, action) => {
  switch (action.type) {
    case Actions.DELETE_ISSUES:
      return {
        ...state,
        list: [...action.payload]
      };
    case Actions.FETCH_ISSUES:
      return {
        ...state,
        list: [...action.payload]
      };
    default:
      return state
  }

};
