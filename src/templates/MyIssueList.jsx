import { React, useEffect } from "react";
import {
  getUserName,
  getUserProfession,
  getUserBirthday,
  getUserMessage,
  getUserImage,
} from "../reducks/users/selectors";
import { useSelector } from "react-redux";
import MyIssues from "../components/issues/MyIssues";
import IconImage from "../assets/img/Icon_image.png";

const MyIssueList = () => {
  const selector = useSelector((state) => state);
  const username = getUserName(selector);
  const userprofession = getUserProfession(selector);
  const userbirthday = getUserBirthday(selector);
  const usermessage = getUserMessage(selector);
  const userimage = getUserImage(selector);
  const images = userimage.length > 0 ? userimage : [{ path: IconImage }];

  const query = window.location.search;
  useEffect(() => {}, [query]);

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
          <h2 className="top-switch">My task</h2>
        </div>
        <div>
          <div className="module-spacer--medium" />
          <MyIssues></MyIssues>
          <div className="module-spacer--medium" />
          <div className="module-spacer--medium" />
        </div>
      </div>
    </div>
  );
};

export default MyIssueList;
