import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const Reset = () => {
  const dispatch = useDispatch();

  return (
    <div className="main-back">
      <div className="main-pop-flame3">
        <h2 className="u-text-center u-text__headline">トッッップ！！！！</h2>
        <div className="main-pop-flame2">
          <div className="module-spacer--medium" />
          <div className="center">
            <p onClick={() => dispatch(push("/signin"))}>サインインに</p>
            <p onClick={() => dispatch(push("/signup"))}>サインアップに</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset;
