import { makeStyles } from "@material-ui/core";
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db, FirebaseTimestamp } from "../firebase";
import { push } from "connected-react-router";
import IdeaList from "../components/issues/IdeaList";
import ImageSwiper from "../components/issues/ImageSwiper";
import { getUserId } from "../reducks/users/selectors";
import { saveIdea } from "../reducks/ideas/operations";
import { PrimaryButton, GreyButton, TextInput } from "../components/UIkit";

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
  const uid = getUserId(selector);

  const path = selector.router.location.pathname;
  const id = path.split("/issues/")[1];

  const [issue, setIssue] = useState(null),
    [submit, setSubmit] = useState(true),
    [idea, setIdea] = useState(""),
    [price, setPrice] = useState("");

  const handlesubmit = useCallback(() => {
    setSubmit(!submit);
  }, [submit]);

  const inputIdea = useCallback(
    (event) => {
      setIdea(event.target.value);
    },
    [setIdea]
  );

  const inputPrice = useCallback(
    (event) => {
      setPrice(event.target.value);
    },
    [setPrice]
  );

  const quantity = 1;

  useEffect(() => {
    db.collection("issues")
      .doc(id)
      .get()
      .then((doc) => {
        const data = doc.data();
        setIssue(data);
      });
  }, []);

  return (
    <>
      <div className="main-back">
        <div className="main-pop-flame3">
          <section className="c-section-wrapin">
            {issue && (
              <div className="p-grid__row">
                <div className={classes.sliderBox}>
                  <ImageSwiper images={issue.images} />
                </div>
                <div className={classes.detail}>
                  <h2 className="u-text__headline">{issue.name}</h2>
                  <p>{issue.subHead}</p>
                  <div className="module-spacer--small" />
                  <p>{issue.description}</p>
                </div>
              </div>
            )}
            <hr />
            {submit === true ? (
              <>
                <div className="module-spacer--medium" />
                <PrimaryButton label={"提案する"} onClick={handlesubmit} />
                <div className="module-spacer--medium" />
                <div className="module-spacer--medium" />
              </>
            ) : (
              <>
                <div className="module-spacer--small" />
                <div className="sub-pop-flame">
                  <GreyButton label={"閉じる"} onClick={handlesubmit} />
                  <TextInput
                    fullWidth={true}
                    label={"提案内容"}
                    multiline={true}
                    required={true}
                    rows={6}
                    value={idea}
                    type={"text"}
                    onChange={inputIdea}
                  />
                  <TextInput
                    fullWidth={true}
                    label={"価格"}
                    multiline={false}
                    required={true}
                    onChange={inputPrice}
                    rows={1}
                    value={price}
                    type={"number"}
                  />
                  <div className="module-spacer--small" />
                  <PrimaryButton
                    label={"送信する"}
                    onClick={() =>
                      dispatch(saveIdea(id, idea, price, quantity, uid))
                    }
                  />
                </div>
                <div className="module-spacer--medium" />
                <div className="module-spacer--medium" />
              </>
            )}
            <section>
              <IdeaList issueId={id} />
            </section>
          </section>
        </div>
      </div>
    </>
  );
};
export default IssueDetail;
