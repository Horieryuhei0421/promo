import React from "react";
import { SubButton } from "../UIkit";

const IssueCard = (props) => {
  const newprice = props.price.toLocaleString();

  return (
    <>
      <div className="idea-back">
        <div className="idea-back-body">{props.idea}</div>
        <div className="idea-back-price">{newprice} 円</div>
        <hr />
        <div className="idea-buy-button">
          <SubButton label={"購入する"} />
        </div>
      </div>
    </>
  );
};

export default IssueCard;
