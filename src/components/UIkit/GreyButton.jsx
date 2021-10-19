import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: theme.palette.grey["400"],
    color: "#636363",
    fontSize: 18,
    height: 48,
    marginBottom: 16,
    width: 256,
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
