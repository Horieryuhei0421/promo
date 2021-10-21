import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { push } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";

const IssueCard = (props) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  return (
    <>
      <div className="idea-back">
        <div className="idea-back-unit">{props.idea}</div>
        <div className="idea-back-unit">{props.price}円</div>
      </div>
    </>
  );
};

export default IssueCard;
