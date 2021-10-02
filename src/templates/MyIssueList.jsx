import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const MyIssueList = () => {
  const dispatch = useDispatch();

  return (
    <div className="c-section-container">
      <h2 className="u-text-center u-text__headline">My案件</h2>
      <button onClick={() => dispatch(push("/companypage"))}>
        ホームページへ
      </button>
    </div>
  );
};

export default MyIssueList;
