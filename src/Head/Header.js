import React from "react";
import logo from "./logo.png";
import { IconFlagIN } from "material-ui-flags";
import {
  Grid,
  InputBase,
  IconButton,
  Box,
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
    backgroundColor: "#0f1111",
    color: "white",
  },
  searchInput: {
    // opacity: "0.6",
    // color: "white",
    // borderColor: "white",
    // padding: `0px ${theme.spacing(1)}px`,
    fontSize: "16px",
    display: "flex",
    backgroundColor: "#FFF",
    width: "700px",
    // height: "80%",
    // "& .MuiSvgIcon-root": {
    //   marginRight: theme.spacing(1),
    // },
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
    backgroundColor: "#0f1111",
    // border: "1px",
    textTransform: "none",
    marginLeft: "6px",
    padding: "3px 10px",
    "&:hover": {
      border: "1px solid #fff",
      // borderColor: "#FFF",
      color: "#c9d1d9",
      // backgroundColor: "#21262d",
    },
  },
  upperNav: {
    fontSize: "12px",
  },
  lowerNav: {
    fontSize: "14px",
    fontWeight: "900",
  },
}));

const options = ["Add from your device", "Add from cloud"];

function Header() {
  const classes = useStyles();

  //used for dropdown
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  //upper portion used for dropdown

  return (
    <Grid
      container
      alignItems="center"
      className={classes.root}
      style={{ padding: "6px" }}
    >
      <Button className={classes.button} style={{ marginRight: "10px" }}>
        <img width="100" height="30" src={logo} alt="amazon" />
        <span style={{ marginTop: "-6px" }}>.in</span>
      </Button>
      <Grid item style={{ marginRight: "10px" }}>
        <span className={classes.upperNav}>Hello</span>
        <br />
        <span className={classes.lowerNav}>Select your address</span>
      </Grid>
      <Grid item className={classes.grid} style={{ flexGrow:1}}>
        <ButtonGroup>
          <Button
            style={{
              backgroundColor: "#f3f3f3",
              border: "2px solid #cdcdcd",
              fontWeight: "900",
            }}
          >
            All
            <ArrowDropDownIcon />
          </Button>
          <InputBase
            placeholder=""
            className={classes.searchInput}
            // endAdornment={<button>/</button>}
            // style={{ borderRadius: "4px" }}
            // width="100%"
          />
          <Button style={{ backgroundColor: "orange" }}>
            <SearchOutlinedIcon fontSize="large" />
          </Button>
        </ButtonGroup>
      </Grid>
      <Button
        className={classes.button}
        style={{ marginRight: "10px", padding: "4px" }}
      >
        <IconButton style={{ padding: "4px" }}>
          <IconFlagIN />
          <ArrowDropDownIcon className={classes.icon} />
        </IconButton>
      </Button>
      <Grid item style={{ marginRight: "10px" }}>
        <span className={classes.upperNav}>Hello, Sign in</span>
        <br />
        <span className={classes.lowerNav}>
          Account & Lists
          <ArrowDropDownIcon
            className={classes.icon}
            style={{ fontSize: 20, marginBottom: -5 }}
          />
        </span>
      </Grid>
      <Grid item style={{ marginRight: "10px" }}>
        <span className={classes.upperNav}>Returns</span>
        <br />
        <span className={classes.lowerNav}>& Orders</span>
        {/* <ArrowDropDownIcon className={classes.icon} /> */}
      </Grid>

      {/* <Grid item> */}

      {/* <IconButton>
          <ButtonGroup ref={anchorRef}>
            <Button size="small" onClick={handleToggle}>
              <AddOutlinedIcon className={classes.icon} />
              <ArrowDropDownIcon className={classes.icon} />
            </Button>
          </ButtonGroup>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {() => (
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu">
                    {options.map((option, index) => (
                      <MenuItem
                        key={option}
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            )}
          </Popper>
        </IconButton> */}

      {/* </Grid> */}
    </Grid>
  );
}
export default Header;
