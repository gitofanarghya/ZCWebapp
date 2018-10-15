import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { Grid, Button } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

class CheckboxListSecondary extends React.Component {
  state = {
    checked: [],
    selectedValue: '',
    all: false
  };

  handleChange = event => {
    this.props.sendCommand(this.state.checked, event.target.value)
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  handleToggleAll = () => () => {
    this.state.all ? 
    this.setState({
      all: false,
      checked: []
    })
    :
    this.setState({
      all: true,
      checked: this.props.trackers
    })
  }

  render() {
    const { classes, trackers } = this.props;
    console.log(this.state)

    return (
      <div className={classes.root}>
      <Grid container direction="column" justify="space-evenly" alignItems="center">
      <Grid item sm={6} className="flex">
        <List>
        <ListItem button className={classes.listItem}>
        <ListItemText primary="select all" />
              <ListItemSecondaryAction>
                <Checkbox
                  onChange={this.handleToggleAll()}
                  checked={this.state.all}
                />
              </ListItemSecondaryAction>
          </ListItem>
          {trackers.map(value => (
            <ListItem key={value.trackerID} button className={classes.listItem}>
              <ListItemText primary={value.trackerID} />
              <ListItemSecondaryAction>
                <Checkbox
                  onChange={this.handleToggle(value)}
                  checked={this.state.checked.indexOf(value) !== -1}
                />
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item sm={6} className="flex">
        <Button variant="contained" color="primary" className={classes.button} onClick={this.handleChange} value="clean">
          CLEAN
        </Button>
        <Button variant="contained" color="secondary" className={classes.button} onClick={this.handleChange} value="stop">
          STOP
        </Button>
        <Button variant="contained" color="default" className={classes.button} onClick={this.handleChange} value="stow">
          STOW
        </Button>
      </Grid>  
      </Grid>
      </div>
    );
  }
}

CheckboxListSecondary.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxListSecondary);