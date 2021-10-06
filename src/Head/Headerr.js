import React from "react";
import logo from "./logo.png";
import { IconFlagIN } from "material-ui-flags";
import {
  Grid,
  InputBase,
  IconButton,
  Badge,
  makeStyles,
  Typography,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@material-ui/core";
// import clsx from "clsx";
import GitHubIcon from "@material-ui/icons/GitHub";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#232f3e",
    color: "white",
    display: "flex",
    justifyContent: "space-between",

  },

  icon: {
    color: "white",
  },
  list: {
    listStyle: "none",
  },
  grid: {
    display: "grid",
    gridAutoFlow: "column",
    alignItems: "center",
    justifyItems: "center",
  },
  button: {
    borderRadius: "4px",
    color: "#fff",
    margin: "5px 0px 6px",
    padding: "8px 9px",
    fontWeight: "bold",
    fontSize: 14,
    border: "1px solid #232f3e",
    "&:hover": {
      border: "1px solid #fff",
    },
  },
}));

const image =
  "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/GZK/Launch/400x39-SWM_EN_JPN._CB644089983_.jpg";

const list = [
  "Best Sellers",
  "Mobiles",
  "Fashion",
  "Electronics",
  "Amazon Pay",
  "Customer Service",
  "Prime",
  "Todays Deals",
];

function Headerr() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      {list.map((text, index) => (
        <List
          style={{
            // display: "flex",
            // flexDirection: "row",
            // flexWarp: "nowarp",
            padding: 0,
            
          }}
        >
          <ListItem className={classes.button} key={index} button>
            {text}
          </ListItem>
        </List>
      ))}
      <img src={image} alt="Amazon Prime" />
    </Grid>
  );
}
export default Headerr;
