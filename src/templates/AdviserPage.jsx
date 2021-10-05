import { React, useEffect, useState } from "react";
import {
  getUserName,
  getUserProfession,
  getUserBirthday,
  getUserMessage,
} from "../reducks/users/selectors";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import Switch from "@mui/material/Switch";
import IssueList from "../components/issues/IssueList";

const AdviserPage = () => {
  const selector = useSelector((state) => state);
  const username = getUserName(selector);
  const userprofession = getUserProfession(selector);
  const userbirthday = getUserBirthday(selector);
  const usermessage = getUserMessage(selector);
  const dispatch = useDispatch();

  const query = window.location.search;
  useEffect(() => {}, [query]);

  return (
    <div>
      <div className="main-back">
        <div className="top-heignt">
          <h1>{username}</h1>
          <h1>{userprofession}</h1>
          <h1>{userbirthday}</h1>
          <h1>{usermessage}</h1>
        </div>
        <div>
          <h2>Adviser</h2>
          <div>
            <Switch
              checked={false}
              onChange={() => dispatch(push("/companypage"))}
              name="loading"
              color="primary"
            />
          </div>
        </div>
        <div>
          <div className="module-spacer--medium" />
          <IssueList></IssueList>
          <div className="module-spacer--medium" />
          <div className="module-spacer--medium" />
        </div>
      </div>
    </div>
  );
};
export default AdviserPage;
