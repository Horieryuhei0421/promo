import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { IssuesReducer } from "../issues/reducers";
import { UsersReducer } from "../users/reducers";
import { IdeasReducer } from "../ideas/reducers";

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      issues: IssuesReducer,
      ideas: IdeasReducer,
      users: UsersReducer
    }),
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  )
}
