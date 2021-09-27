import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { signInAction } from "../reducks/users/actions";

const Login = () => {
  const dispach = useDispatch();
  return (
    <div>
      <h2>ログイン</h2>
      <button
        onClick={() => {
          dispach(signInAction({ uid: "0001" }));
          dispach(push("/adviserpage"));
        }}
      >
        ログインする
      </button>
    </div>
  );
};
export default Login;
