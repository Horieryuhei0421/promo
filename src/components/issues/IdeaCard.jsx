import React from "react";
import { SubButton } from "../UIkit";
import { orderIdea } from "../../reducks/ideas/operations";
import { useSelector, useDispatch } from "react-redux";
import { getUserId } from "../../reducks/users/selectors";

const IssueCard = (props) => {
  const newprice = props.price.toLocaleString();
  const selector = useSelector((state) => state);
  const uid = getUserId(selector);
  const dispatch = useDispatch();

  return (
    <>
      <div className="idea-back">
        <div className="idea-back-body">{props.idea}</div>
        <div className="idea-back-price">{newprice} 円</div>
        <hr />
        <div className="idea-buy-button">
          {props.quantity === 1 ? (
            <>
              <SubButton
                label={"購入する"}
                onClick={() =>
                  dispatch(
                    orderIdea(props.id, props.idea, props.price, props.quantity)
                  )
                }
              />
            </>
          ) : (
            <>
              <p>採用済み</p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default IssueCard;
