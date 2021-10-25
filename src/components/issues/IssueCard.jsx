import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import NoImage from "../../assets/img/No_image.png";
import { push } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";
import { getUserId } from "../../reducks/users/selectors";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { deleteIssue } from "../../reducks/issues/operations";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      margin: 16,
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      margin: 16,
      width: "calc(50% - 32px)",
    },
    [theme.breakpoints.up("md")]: {
      margin: 16,
      width: "calc(33.33333% - 32px)",
    },
  },
  content: {
    display: "flex",
    padding: "16 8",
    textAlign: "left",
    "&:last-child": {
      paddingBottom: 16,
    },
  },
  media: {
    height: 0,
    paddingTop: "100%",
  },
  farmname: {
    color: theme.palette.primary.main,
    fontSize: 16,
  },
  menu: {
    position: "relative",
    margin: "0 0 auto auto",
  },
}));

const ProductCard = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const uid = getUserId(selector);

  const [anchorEl, setAnchorEL] = useState(null);

  const handleClick = (event) => {
    setAnchorEL(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEL(null);
  };

  const images = props.images.length > 0 ? props.images : [{ path: NoImage }];

  // const editissue = () => {
  //   if (props.uid === uid) {
  //     dispatch(push("/issue/edit/" + props.id));
  //     handleClose();
  //   }
  // };

  const deleteissue = () => {
    if (props.uid === uid) {
      dispatch(deleteIssue(props.id));
      handleClose();
    }
  };

  return (
    <Card className={classes.root}>
      {/* <div className="card-shadow"> */}
      <div className="p-grid__column2">
        <CardMedia
          className={classes.media}
          image={images[0].path}
          title=""
          onClick={() => dispatch(push("/issues/" + props.id))}
        />
        <CardContent className={classes.content}>
          <div onClick={() => dispatch(push("/issues/" + props.id))}>
            <Typography className={classes.farmname}>{props.name}</Typography>
            <Typography color="textSecondary">{props.subHead}</Typography>
          </div>
          {props.uid === uid && (
            <IconButton onClick={handleClick} className={classes.menu}>
              <MoreVertIcon />
            </IconButton>
          )}
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {/* <MenuItem
              onClick={() => {
                editissue();
              }}
            >
              編集する
            </MenuItem> */}
            <MenuItem
              onClick={() => {
                deleteissue();
              }}
            >
              削除する
            </MenuItem>
          </Menu>
        </CardContent>
      </div>
      {/* </div> */}
    </Card>
  );
};

export default ProductCard;
