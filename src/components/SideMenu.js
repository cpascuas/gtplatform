import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

import HomeIcon from "@material-ui/icons/Home";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import StorageIcon from "@material-ui/icons/Storage";
import BarChartIcon from "@material-ui/icons/BarChart";
import WorkIcon from "@material-ui/icons/Work";

import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
} from "@material-ui/core";

import AddAsset from "../forms/AddAsset";
import Controls from "./controls/Controls";

const useStyles = makeStyles({
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "250px",
    height: "100%",
    backgroundColor: "#32447E",
  },
  projectTitle: {
    color: "#fff",
  },
  nested: {
    paddingLeft: "20px",
  },
  button: {
    margin: "20px 20px 20px 55px",
  },
  // listitems: {
  //     color: '#fff'
  // }
  // '& .MuiListItemIcon-root': {
  //     color: '#fff',
  // }
});

function SideMenu() {
  const classes = useStyles();

  const [openProjects, setOpenProjects] = useState(false);
  const [openAddAsset, setAddAsset] = useState(false);

  return (
    <div className={classes.sideMenu}>
      <div className={classes.projectTitle}>
        <List component="nav">
          <ListItem
            button
            onClick={() => {
              setOpenProjects(!openProjects);
            }}
          >
            <ListItemText primary="GivingTuesday" />
            {openProjects ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
        </List>
        <Collapse in={openProjects} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="GivingTuesday Mexico" />
            </ListItem>
          </List>
        </Collapse>
      </div>
      {/* add asset button */}
      <div className={classes.button}>
        <Button
          size="medium"
          disableElevation
          variant="contained"
          color="default"
          startIcon={<AddIcon />}
          onClick={() => {
            setAddAsset(true);
          }}
        >
          Add Asset
        </Button>
      </div>
      {/* test popup dialog */}
      <Dialog open={openAddAsset}>
        <DialogTitle>
          <div style={{ display: "flex" }}>
            <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
              Add Asset
            </Typography>
            <IconButton
              onClick={() => {
                setAddAsset(false);
              }}
            >
              <CloseIcon />
            </IconButton>
            {/* <Controls.Button
              text="X"
              onClick={() => {
                setAddAsset(false);
              }}
            ></Controls.Button> */}
          </div>
          <Divider />
        </DialogTitle>
        <DialogContent>
          <div>
            {" "}
            <AddAsset />
          </div>
        </DialogContent>
      </Dialog>
      ;
      <div>
        <List component="nav">
          <ListItem button>
            <ListItemIcon style={{ color: "#fff" }}>
              <HomeIcon />
              <ListItemText secondary="Home" />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon style={{ color: "#fff" }}>
              <BookmarkIcon />
              <ListItemText secondary="Bookmarks" />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon style={{ color: "#fff" }}>
              <StorageIcon />
              <ListItemText secondary="Assets" />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon style={{ color: "#fff" }}>
              <BarChartIcon />
              <ListItemText secondary="Dashboards" />
            </ListItemIcon>
          </ListItem>
        </List>
        <Divider />
        <List component="nav">
          <ListItem button>
            <ListItemIcon style={{ color: "#fff" }}>
              <WorkIcon />
              <ListItemText secondary="Workspace" />
            </ListItemIcon>
          </ListItem>
        </List>
      </div>
    </div>
  );
}

export default SideMenu;
