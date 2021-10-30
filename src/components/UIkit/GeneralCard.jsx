import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const GeneralCard = (props) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="idea-back">
        <p className="idea-back-body">{props.idea}</p>
        <p className="idea-back-price">{props.price}</p>
        <hr />

        <p
          className="idea-back-to"
          onClick={() => dispatch(push("/issues/" + props.issueId))}
        >
          こちらの商品へ
        </p>
      </div>
    </>
  );
};

export default GeneralCard;
