import { React, useEffect, useState } from "react";
import {
  getUserName,
  getUserProfession,
  getUserBirthday,
  getUserMessage,
  getCompanyName,
  getCompanyAddress,
  getCompanyTel,
  getCompanyDescription,
} from "../reducks/users/selectors";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import NoImage from "../assets/img/No_image.png";

const CompanyPage = () => {
  const selector = useSelector((state) => state);
  const username = getUserName(selector);
  const userprofession = getUserProfession(selector);
  const userbirthday = getUserBirthday(selector);
  const usermessage = getUserMessage(selector);
  const companyname = getCompanyName(selector);
  const companyaddress = getCompanyAddress(selector);
  const companytel = getCompanyTel(selector);
  const companydescription = getCompanyDescription(selector);
  const dispatch = useDispatch();

  const query = window.location.search;
  useEffect(() => {}, [query]);

  const [anchorEl, setAnchorEL] = useState(null);

  const handleClick = (event) => {
    setAnchorEL(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEL(null);
  };
  const moveToEdit = () => {
    if (companyname === "未記入") {
      alert(
        "会社の情報を入力してからご利用ください。右下の青いボタンからご入力できます。"
      );
      return false;
    } else {
      dispatch(push("/issue/edit"));
    }
  };
  const moveToList = () => {
    if (companyname === "未記入") {
      alert(
        "会社の情報を入力してからご利用ください。右下の青いボタンからご入力できます。"
      );
      return false;
    } else {
      dispatch(push("/myissuelist"));
    }
  };

  return (
    <div>
      <div className="main-back">
        <div className="main-top-flame">
          <img src={NoImage} alt="noimage" className="top-png" />
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
          <h1 className="top-switch">Company</h1>
          <div>
            <Switch
              checked={true}
              onChange={() => dispatch(push("/adviserpage"))}
              name="loading"
              color="primary"
            />
          </div>
        </div>
        <div>
          <div className="module-spacer--medium" />
          <div className="main-pop-flame">
            <div className="main-setting-flame">
              <div className="top-grid">
                <p className="top-title">会社名:</p>
                <p>{companyname}</p>
                <p className="top-title">住所:</p>
                <p>{companyaddress}</p>
                <p className="top-title">電話番号:</p>
                <p>{companytel}</p>
                <p className="top-title">会社の詳細:</p>
                <p>{companydescription}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="module-spacer--medium" />
        <div className="button-position">
          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <Fab size="large" color="primary" aria-label="add">
              <IconButton onClick={handleClick}>
                <AddIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => {
                    moveToEdit();
                    handleClose();
                  }}
                  style={{ fontSize: "1.2em" }}
                >
                  アイデアを募集する
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    moveToList();
                    handleClose();
                  }}
                  style={{ fontSize: "1.2em" }}
                >
                  タスク一覧を見る
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    dispatch(push("/companysetting"));
                    handleClose();
                  }}
                  style={{ fontSize: "1.2em" }}
                >
                  会社の情報を書く
                </MenuItem>
              </Menu>
            </Fab>
          </Box>
        </div>
      </div>
    </div>
  );
};
export default CompanyPage;
