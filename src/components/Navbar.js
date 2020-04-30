import React, { useState } from "react";
import MobilRightMenuSlider from "@material-ui/core/Drawer"
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  ListItemIcon,
} from "@material-ui/core";
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";
import avatar from "../images/Patrick.png";
import { makeStyles } from "@material-ui/core/styles";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#222c31",
    height: "30rem",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13)
    // width: "104px",
    // height: "104px"
  },
  listItem: {
    color: "white",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
  },
];

const Navbar = () => {
  const [state, setState] = useState({
    right: false
  })
  const toggleSlider = ((slider, open) => () => {
    setState({...state, [slider]: open});
  })
  const classes = useStyles();

  const sideList = (slider) => (
    <Box 
      className={classes.menuSliderContainer} 
      component="div"
      onClick={toggleSlider(slider, false)}  
    >
      <Avatar className={classes.avatar} src={avatar} alt="Patrick" />
      <Divider />
      <List>
        {menuItems.map((item, key) => (
          <ListItem button key={key}>
            <ListItemIcon 
              className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={item.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <ArrowBack style={{ color: "#5886d0" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "white" }}>
              Portfolio
            </Typography>
            <MobilRightMenuSlider
              open={state.right}
              anchor="right"
              onClose={toggleSlider("right", false)}
            >
              {sideList("right")}
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
