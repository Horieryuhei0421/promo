import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import { createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    button: {
      backgroundColor: "#ffcf4d",
      color: "#ffffff",
      fontSize: 15,
      height: 35,
      width: 100,
    },
  })
);

const SubButton = (props) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      variant="contained"
      onClick={() => props.onClick()}
    >
      {props.label}
    </Button>
  );
};

export default SubButton;
