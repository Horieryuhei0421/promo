import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const GeneralCard = (props) => {
  const dispatch = useDispatch();

  return (
    <>
      <>
        <p>{props.idea}</p>
        <p>{props.price}</p>
        <button onClick={() => dispatch(push("/issues/" + props.issueId))}>
          こちらの商品へ
        </button>
      </>
    </>
  );
};

export default GeneralCard;
