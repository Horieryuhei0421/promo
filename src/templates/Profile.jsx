import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const Profile = () => {
  const dispatch = useDispatch();

  return (
    <div className="c-section-container">
      <h2 className="u-text-center u-text__headline">プロフィール設定ページ</h2>
      <button onClick={() => dispatch(push("/adviserpage"))}>
        ホームページへ
      </button>
    </div>
  );
};

export default Profile;
