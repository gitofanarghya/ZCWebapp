import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BuildIcon from '@material-ui/icons/Build';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SendIcon from '@material-ui/icons/Send';
import NetworkWifiIcon from '@material-ui/icons/NetworkWifi';
import { Link } from "react-router-dom";

export const mailFolderListItems = (
  <div>
    <Link to="/Commissioning">
    <ListItem button>
      <ListItemIcon>
        <BuildIcon />
      </ListItemIcon>
      <ListItemText primary="Commissioning" />
    </ListItem>
    </Link>
    <Link to="/Commands">
    <ListItem button>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary="Commands" />
    </ListItem>
    </Link>
    <Link to="/Trends">
    <ListItem button>
      <ListItemIcon>
        <TrendingUpIcon />
      </ListItemIcon>
      <ListItemText primary="Trends" />
    </ListItem>
    </Link>
    <Link to="/Wifi">
    <ListItem button>
      <ListItemIcon>
        <NetworkWifiIcon />
      </ListItemIcon>
      <ListItemText primary="Wifi-Settings" />
    </ListItem>
    </Link>
  </div>
);