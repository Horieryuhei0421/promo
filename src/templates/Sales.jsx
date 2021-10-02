import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const Sales = () => {
  const dispatch = useDispatch();

  return (
    <div className="c-section-container">
      <h2 className="u-text-center u-text__headline">売り上げ一覧のページ</h2>
      <button onClick={() => dispatch(push("/adviserpage"))}>
        ホームページへ
      </button>
    </div>
  );
};

export default Sales;
