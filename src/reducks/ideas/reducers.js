import * as Actions from "./actions"
import initialState from "../store/initialState"

export const IdeasReducer = (state = initialState.issues, action) => {
  switch (action.type) {
    case Actions.FETCH_IDEAS:
      return {
        ...state,
        list: [...action.payload]
      };
    default:
      return state
  }

};