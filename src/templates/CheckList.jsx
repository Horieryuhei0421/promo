import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const CheckList = () => {
  const dispatch = useDispatch();

  return (
    <div className="c-section-container">
      <h2 className="u-text-center u-text__headline">
        チェックリスト（気になる）のページ
      </h2>
      <button onClick={() => dispatch(push("/adviserpage"))}>
        ホームページへ
      </button>
    </div>
  );
};

export default CheckList;