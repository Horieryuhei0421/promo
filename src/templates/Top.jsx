import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const Reset = () => {
  const dispatch = useDispatch();

  return (
    <div className="c-section-container">
      <h2 className="u-text-center u-text__headline">トッッップ！！！！</h2>
      <div className="module-spacer--medium" />
      <div className="center">
        <p onClick={() => dispatch(push("/signin"))}>サインインに</p>
        <p onClick={() => dispatch(push("/signup"))}>サインアップに</p>
      </div>
    </div>
  );
};

export default Reset;
