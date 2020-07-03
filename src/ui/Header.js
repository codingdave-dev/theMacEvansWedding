import React, { Fragment, useEffect, useState } from "react";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/styles";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Link from "../ui/Link";


import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { openDialog } from "../store/actions/dialogActions/dialogActions";
import { connect } from "react-redux";
import { logout } from "../store/actions/authActions/authActions";

const actions = {
  openDialog,
  logout,
};

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile,
  admin: state.firebase.profile.admin,
});

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
  },
  logo: {
    height: "2.8em",
    [theme.breakpoints.down("md")]: {
      height: "2.6em",
    },
    [theme.breakpoints.down("sm")]: {
      height: "2em",
    },
  },
  logoContainer: {
    marginLeft: "0.5em",
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    color: theme.palette.common.white,
    minWidth: 10,
    marginLeft: "25px",
    "&:hover": {
      color: theme.palette.common.white,
      opacity: 1,
    },
  },
  tabEnd: {
    ...theme.typography.tab,
    marginRight: "25px",
  },

  menu: {
    marginTop: "3em",
    color: "white",
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },

  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    color: theme.palette.common.white,
    height: "30px",
    width: "30px",
  },
  drawer: {
    backgroundColor: theme.palette.primary.main,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: "0.7",
  },

  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
  navButton: {
    color: theme.palette.common.white,
    border: "1px solid" + theme.palette.common.white,
    fontFamily: "Raleway",
    textTransform: "none",
    fontWeight: "500",
    fontSize: "1rem",
  },
}));

const Header = ({
  value,
  setValue,
  selectedIndex,
  setSelectedIndex,
  openDialog,
  logout,
  auth,
  profile,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|ipod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  // AUTHENTICATION
  const authenticated = auth.isLoaded && !auth.isEmpty && profile.isLoaded && !profile.isEmpty;




  // SIGNIN/SIGNOUT/REGISTER HANDLERS
  const handleRegister = () => {
    openDialog("RegisterDialog");
  }
  const handleSignIn = () => {
    openDialog("LoginDialog");
  };

  const handleSignOut = () => {

    setValue(0)
    setSelectedIndex(0)
    setAnchorEl(null);
    logout();
  };

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpen(true);
    setSelectedIndex(i);
  };


  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    { name: "RSVP", link: "/rsvp", activeIndex: 1 },
    { name: "Wedding Party", link: "/wedding_party", activeIndex: 2 },
    { name: "Event", link: "/event", activeIndex: 3 },
    { name: "Venue", link: "/venue", activeIndex: 4 },
    { name: "Photos", link: "/photos", activeIndex: 5 },
    { name: "Registry", link: "/registry", activeIndex: 6 },
    { name: "Contact", link: "/contact", activeIndex: 7, end: true },

  ];


  useEffect(() => {
    [...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
          }
          break;
        default:
          break;
      }
    });
  }, [
    value,
    setValue,
    selectedIndex,
    setSelectedIndex,
    routes,
  ]);

  const tabs = (
      <Fragment>
        {authenticated || !authenticated ? <Fragment>
          <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
          >
            {routes.map((route, index) => (
                <Tab
                    key={`${route}${index}`}
                    // className={classes.tab}
                    className={route.end ? classes.tab + ' ' + classes.tabEnd : classes.tab}
                    component={Link}
                    href={route.link}
                    label={route.name}
                />
            ))}

          </Tabs>


        </Fragment> : null}
      </Fragment>

  );

  const drawer = (
    <Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>

          {routes.map((route) => (
            <ListItem
              key={`${route}${route.activeIndex}`}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
                setSelectedIndex(null);
              }}
              divider
              button
              component={Link}
              href={route.link}
              selected={value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}

          {/*{authenticated && authenticated && (*/}
          {/*    <div style={{marginTop: '1em'}}>*/}
          {/*      {authRoutes.map((route) => (*/}
          {/*          <ListItem*/}
          {/*              key={`${route}${route.activeIndex}`}*/}
          {/*              onClick={() => {*/}
          {/*                setOpenDrawer(false);*/}
          {/*                setValue(route.activeIndex);*/}
          {/*                setSelectedIndex(null);*/}
          {/*              }}*/}
          {/*              divider*/}
          {/*              button*/}
          {/*              component={Link}*/}
          {/*              href={route.link}*/}
          {/*              selected={value === route.activeIndex}*/}
          {/*              classes={{ selected: classes.drawerItemSelected }}*/}
          {/*          >*/}
          {/*            <ListItemText className={classes.drawerItem} disableTypography>*/}
          {/*              {route.name}*/}
          {/*            </ListItemText>*/}
          {/*          </ListItem>*/}
          {/*      ))}*/}
          {/*    </div>*/}
          {/*)}*/}



        </List>
      </SwipeableDrawer>

      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
        className={classes.drawerIconContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </Fragment>
  );

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position={"fixed"} className={classes.appBar}>
          <Toolbar disableGutters>
            <Button
              component={Link}
              href={"/"}
              disableRipple
              className={classes.logoContainer}
              onClick={() => setValue(0)}
            >
              <img
                src={"/assets/logo.jpeg"}
                className={classes.logo}
                alt="company-logo"
              />
            </Button>

            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
};

export default connect(mapStateToProps, actions)(Header);
