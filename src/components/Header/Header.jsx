import React, { useState, useCallback } from "react";
import { makeStyles } from "@material-ui/styles";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import logo from "../../assets/img/header_cat.png";
import { useDispatch, useSelector } from "react-redux";
import { getSignedIn } from "../../reducks/users/selectors";
import { push } from "connected-react-router";
import HeaderMenus from "./HeaderMenus";
import ClosableDrawer from "./ClosableDrawer";
import { promo_tag } from "../../assets/img";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  menuBar: {
    backgroundColor: "#f4f4f4",
    color: "#444",
  },
  toolbar: {
    margin: "0 auto",
    maxWidth: 1400,
    width: "100%",
  },
  iconButtons: {
    margin: "0 0 0 auto",
  },
});

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const isSignedIn = getSignedIn(selector);

  const [open, setOpen] = useState(false);

  const handleDrawerToggle = useCallback(
    (event) => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
      setOpen(!open);
    },
    [setOpen, open]
  );

  return (
    <div classes={classes.root}>
      <AppBar position="fixed" className={classes.menuBar}>
        <Toolbar className={classes.toolbar}>
          <img
            src={promo_tag}
            alt="TorahackLogo"
            width="130px"
            onClick={() => dispatch(push("/adviserpage"))}
          />
          {isSignedIn && (
            <div className={classes.iconButtons}>
              <HeaderMenus handleDrawerToggle={handleDrawerToggle} />
            </div>
          )}
        </Toolbar>
      </AppBar>
      <ClosableDrawer open={open} onClose={handleDrawerToggle} />
    </div>
  );
};

export default Header;
