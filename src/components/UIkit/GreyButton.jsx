import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: theme.palette.grey["300"],
    color: "#636363",
    fontSize: 18,
    height: 48,
    width: 240,
  },
}));

const GreyButton = (props) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      variant={"contained"}
      onClick={() => props.onClick()}
    >
      {props.label}
    </Button>
  );
};

export default GreyButton;
