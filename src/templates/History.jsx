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

  useEffect(() => {
    dispatch(fetchOrdersHistory());
  }, []);

  return (
    <div className="main-back">
      <section className="c-section-wrapin">
        {orders.length > 0 &&
          orders.map((order) => (
            <>
              <GeneralCard
                idea={order.idea}
                price={order.price}
                issueId={order.issueId}
              />
            </>
          ))}
      </section>
    </div>
  );
};

export default History;
