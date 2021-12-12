import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { promo_top, promo_top_tag } from "../assets/img";
import { PrimaryButton, GreyButton } from "../components/UIkit";

const Reset = () => {
  const dispatch = useDispatch();

  return (
    <div className="main-back">
      <div className="main-pop-flameTop">
        <div className="top-profile-grid-Top">
          <div className="top-profile-frame">
            <div className="center">
              <img
                src={promo_top}
                alt="promoimage"
                className="top_page_image1"
              />
            </div>
            <div className="module-spacer--medium" />

            <div className="center">
              <PrimaryButton
                label={"sign in"}
                onClick={() => dispatch(push("/signin"))}
              />
              <GreyButton
                label={"sign up"}
                onClick={() => dispatch(push("/signup"))}
              />
            </div>
          </div>
          <div className="top_right_frame">
            <div className="top_right1">
              <p>企業に関する知識不足や</p>
              <p>経営に困った方が</p>
              <p>このアプリで手軽に解決！</p>
            </div>
            <div className="module-spacer--medium" />
            <img
              src={promo_top_tag}
              alt="promoimage"
              className="top_page_image2"
            />
            <div className="module-spacer--medium" />
            <div className="top_right2">
              <h3>A handy tool to help business people</h3>
            </div>
            <div className="module-spacer--medium" />
            <div className="top_right3">
              <p>いざ企業をしようと思い行動しようとしても</p>
              <p>最初に何をすればいいのか分からない…</p>
              <p>経営がうまくいかない、何をすればいいんだ…</p>
              <p>そんな人が「Promo.」を使って有識者から</p>
              <p>知識やアイデアを買い取ることで</p>
              <p>これまでになかった考えをもとに一気に前へ進める！</p>
            </div>
            <div className="module-spacer--medium" />
            <div className="module-spacer--medium" />
            <div className="center2">
              <PrimaryButton
                label={"sign in"}
                onClick={() => dispatch(push("/signin"))}
              />
              <GreyButton
                label={"sign up"}
                onClick={() => dispatch(push("/signup"))}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset;
