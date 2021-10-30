import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersHistory } from "../reducks/users/selectors";
import { fetchOrdersHistory } from "../reducks/users/operations";
import { makeStyles } from "@material-ui/styles";
import { push } from "connected-react-router";
import GeneralCard from "../components/UIkit/GeneralCard";

const History = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const orders = getOrdersHistory(selector);
  // const orders = 0;

  useEffect(() => {
    dispatch(fetchOrdersHistory());
  }, []);

  return (
    <div className="main-back">
      <div className="module-spacer--medium" />
      <div className="main-pop-flame2">
        <h1 onClick={() => dispatch(push("/adviserpage"))} className="batu2">
          ×
        </h1>
        <h2 className="idea-title">購入履歴</h2>
        {orders.length > 0 ? (
          orders.map((order) => (
            <>
              <GeneralCard
                idea={order.idea}
                price={order.price}
                issueId={order.issueId}
              />
            </>
          ))
        ) : (
          <>
            <div>
              <div className="module-spacer--medium" />
              <div className="module-spacer--medium" />

              <p>購入した提案がありません</p>
            </div>
          </>
        )}
      </div>
      <div className="module-spacer--medium" />
    </div>
  );
};

export default History;
