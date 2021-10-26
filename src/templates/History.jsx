import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersHistory } from "../reducks/users/selectors";
import { fetchOrdersHistory } from "../reducks/users/operations";
import { makeStyles } from "@material-ui/styles";
import { push } from "connected-react-router";

const useStyles = makeStyles((theme) => ({
  orderList: {
    background: theme.palette.grey["100"],
    margin: "0 auto",
    padding: 32,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: 768,
    },
  },
}));

const History = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const orders = getOrdersHistory(selector);

  useEffect(() => {
    dispatch(fetchOrdersHistory());
  }, []);

  return (
    <section className="c-section-wrapin">
      {orders.length > 0 &&
        orders.map((order) => (
          <>
            <p>{order.idea}</p>
            <p>{order.price}</p>
            <button onClick={() => dispatch(push("/issues/" + order.issueId))}>
              こちらの商品へ
            </button>
          </>
        ))}
    </section>
  );
};

export default History;
