import React, { useCallback, useEffect, useState } from "react";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { AddCircle, History, Person, ExitToApp } from "@material-ui/icons";
import { TextInput } from "../UIkit";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import { signOut } from "../../reducks/users/operations";
import { db } from "../../firebase";
import {
  notice_icon,
  check_icon,
  home_icon,
  profit_icon,
} from "../../assets/img/index";

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: 256,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: 256,
  },
  searchField: {
    alignItems: "center",
    display: "flex",
    marginLeft: 32,
  },
}));

const ClosableDrawer = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { container } = props;

  const selectMenu = (event, path) => {
    dispatch(push(path));
    props.onClose(event);
  };

  const menus = [
    {
      func: selectMenu,
      label: "ホーム",
      icon: <img src={home_icon} width={22} />,
      id: "home",
      value: "/adviserpage",
    },
    {
      func: selectMenu,
      label: "売上一覧",
      icon: <img src={profit_icon} width={22} />,
      id: "sales",
      value: "/sales",
    },
    {
      func: selectMenu,
      label: "購入履歴",
      icon: <History />,
      id: "history",
      value: "/history",
    },
    {
      func: selectMenu,
      label: "プロフィール設定",
      icon: <Person />,
      id: "profile",
      value: "/profile",
    },
    {
      func: selectMenu,
      label: "お問い合わせ",
      icon: <img src={check_icon} width={22} />,
      id: "inquiry",
      value: "/inquiry",
    },
  ];

  return (
    <nav className={classes.drawer}>
      <Drawer
        container={container}
        variant="temporary"
        anchor="right"
        open={props.open}
        onClose={(e) => props.onClose(e)}
        classes={{ paper: classes.drawerPaper }}
        ModalProps={{ keepMounted: true }}
      >
        <div
          onClose={(e) => {
            props.onClose(e);
          }}
          onKeyDown={(e) => {
            props.onClose(e);
          }}
        >
          <List>
            {menus.map((menu) => (
              <ListItem
                button
                key={menu.id}
                onClick={(e) => menu.func(e, menu.value)}
              >
                <ListItemIcon>{menu.icon}</ListItemIcon>
                <ListItemText primary={menu.label} />
              </ListItem>
            ))}
            <ListItem button key="logout" onClick={() => dispatch(signOut())}>
              <ListItemIcon>
                <ExitToApp />
              </ListItemIcon>
              <ListItemText primary={"Logout"} />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </nav>
  );
};

export default ClosableDrawer;
