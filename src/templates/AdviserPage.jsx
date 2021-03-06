import { React, useEffect } from "react";
import {
  getUserName,
  getUserProfession,
  getUserBirthday,
  getUserMessage,
  getUserImage,
} from "../reducks/users/selectors";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import Switch from "@mui/material/Switch";
import IssueList from "../components/issues/IssueList";
import IconImage from "../assets/img/Icon_image.png";

const AdviserPage = () => {
  const selector = useSelector((state) => state);
  const username = getUserName(selector);
  const userprofession = getUserProfession(selector);
  const userbirthday = getUserBirthday(selector);
  const usermessage = getUserMessage(selector);
  const userimage = getUserImage(selector);
  const dispatch = useDispatch();
  const images = userimage.length > 0 ? userimage : [{ path: IconImage }];

  const query = window.location.search;
  useEffect(() => {}, [query]);

  console.log(selector);
  return (
    <div>
      <div className="main-back">
        <div className="main-top-flame">
          <img src={images[0].path} alt="iconImge" className="top-png" />
          <div className="module-spacer--medium" />
          <div className="top-profile-grid">
            <p className="top-title">氏名：</p>
            <p>{username}</p>
            <p className="top-title">職業：</p>
            <p>{userprofession}</p>
            <p className="top-title">生年月日：</p>
            <p>{userbirthday}</p>
            <p className="top-title">プロフィール：</p>
            <p>{usermessage}</p>
          </div>
        </div>
        <div>
          <h2 className="top-switch">Adviser</h2>
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
