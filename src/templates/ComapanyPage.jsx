import { React, useEffect, useState } from "react";
import {
  getUserName,
  getCompanyName,
  getCompanyAddress,
  getCompanyTel,
  getCompanyDescription,
} from "../reducks/users/selectors";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { signOut } from "../reducks/users/operations";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const CompanyPage = () => {
  const selector = useSelector((state) => state);
  const username = getUserName(selector);
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

  return (
    <div>
      <div className="main-back">
        <div className="top-heignt">
          <h1>{username}</h1>
        </div>
        <div>
          <h2>Company</h2>
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
            <div>
              <h1>会社名:{companyname}</h1>
              <h1>住所:{companyaddress}</h1>
              <h1>電話番号:{companytel}</h1>
              <h1>会社の詳細:{companydescription}</h1>
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
                    dispatch(push("/issue/edit"));
                    handleClose();
                  }}
                  style={{ fontSize: "1.2em" }}
                >
                  アイデアを募集する
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    dispatch(push("/myissuelist"));
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
                  会社の設定を書く
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
