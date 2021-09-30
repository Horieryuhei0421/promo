import { makeStyles } from "@material-ui/core";
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db, FirebaseTimestamp } from "../firebase";
// import { ImageSwiper, Sizetable } from "../components/products";
// import { addProductToCart } from "../reducks/users/operations";

const useStyles = makeStyles((theme) => ({
  sliderBox: {
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto 24px auto",
      height: 320,
      width: 320,
    },
    [theme.breakpoints.up("sm")]: {
      margin: "0 auto",
      height: 400,
      width: 400,
    },
  },
  detail: {
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto 16px auto",
      height: 320,
      width: 320,
    },
    [theme.breakpoints.up("sm")]: {
      margin: "0 auto",
      height: "auto",
      width: 400,
    },
  },
  price: {
    fontSize: 36,
  },
}));

const IssueDetail = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const path = selector.router.location.pathname;
  const id = path.split("/issues/")[1];

  const [issue, setIssue] = useState(null);

  useEffect(() => {
    db.collection("issues")
      .doc(id)
      .get()
      .then((doc) => {
        const data = doc.data();
        setIssue(data);
      });
  }, []);

  // const addProduct = useCallback(
  //   (selectedSize) => {
  //     const timestamp = FirebaseTimestamp.now();
  //     // dispatch(
  //     //   addIssueToCart({
  //     //     added_at: timestamp,
  //     //     description: issue.description,
  //     //     gender: issue.gender,
  //     //     images: issue.images,
  //     //     name: issue.name,
  //     //     price: issue.price,
  //     //     productId: issue.id,
  //     //     quantity: 1,
  //     //     size: selectedSize,
  //     //   })
  //     // );
  //   },
  //   [issue]
  // );
  return (
    <section className="c-section-wrapin">
      {issue && (
        <div className="p-grid__row">
          <div className={classes.sliderBox}>
            {/* <ImageSwiper images={issue.images} /> */}
          </div>
          <div className={classes.detail}>
            <h2 className="u-text__headline">{issue.name}</h2>
            <p className={classes.price}>¥{issue.price.toLocaleString()}</p>

            <div className="module-spacer--small" />
            <p>{issue.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};
export default IssueDetail;
