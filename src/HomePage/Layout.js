import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BuildIcon from '@material-ui/icons/Build';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SendIcon from '@material-ui/icons/Send';
import NetworkWifiIcon from '@material-ui/icons/NetworkWifi';
import { Link } from "react-router-dom";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: 'lightgrey',
    padding: theme.spacing.unit * 3,
  },
  selected: {
    backgroundColor: "lightskyblue"
  }
});

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
    selected: 0
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  handleListItemClick = (event, index) => {
    this.setState({ selected: index });
  };


  render() {
    const { classes, theme, children } = this.props;

    const drawer = (
      <div>
        <div className={classNames(classes.toolbar, "ftclogo")} />
        <Divider />
        <Link to="/Commissioning">
        <ListItem button className={this.state.selected === 0 ? classes.selected : ""} onClick={event => this.handleListItemClick(event, 0)}>
          <ListItemIcon>
            <BuildIcon />
          </ListItemIcon>
          <ListItemText primary="Commissioning" />
        </ListItem>
        </Link>
        <Link to="/Commands">
        <ListItem button className={this.state.selected === 1 ? classes.selected : ""} onClick={event => this.handleListItemClick(event, 1)}>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Commands" />
        </ListItem>
        </Link>
        <Link to="/Trends">
        <ListItem button className={this.state.selected === 2 ? classes.selected : ""} onClick={event => this.handleListItemClick(event, 2)}>
          <ListItemIcon>
            <TrendingUpIcon />
          </ListItemIcon>
          <ListItemText primary="Trends" />
        </ListItem>
        </Link>
        <Link to="/Wifi">
        <ListItem button className={this.state.selected === 3 ? classes.selected : ""} onClick={event => this.handleListItemClick(event, 3)}>
          <ListItemIcon>
            <NetworkWifiIcon />
          </ListItemIcon>
          <ListItemText primary="Wifi-Settings" />
        </ListItem>
        </Link>
        <Divider />
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              Zone Controller Interface
            </Typography>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);