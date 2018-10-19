import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { Grid, Button } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

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

  handleChange = command => {
    this.props.sendCommand(this.state.checked, command)
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

    return (
      <div className={classes.root}>
        <Table className={classes.table}>
            <TableBody>
            <TableRow>
                      <TableCell padding="default">ZONE</TableCell>
                      <TableCell padding="default">
                        <Button variant="contained" color="primary" className={classes.button} onClick={() => this.handleChange('CLEAN')}>
                          CLEAN
                        </Button>
                      </TableCell>
                      <TableCell padding="default">
                        <Button variant="contained" color="primary" className={classes.button} onClick={() => this.handleChange('STOW')}>
                          STOW
                        </Button>
                      </TableCell>
                      <TableCell padding="default">
                        <Button variant="contained" color="primary" className={classes.button} onClick={() => this.handleChange('STOP')}>
                          STOP
                        </Button>
                      </TableCell>
                      <TableCell padding="default">
                        <Button variant="contained" color="primary" className={classes.button} onClick={() => this.handleChange('AUTO')}>
                          AUTO
                        </Button>
                      </TableCell>
                      <TableCell padding="default">
                        <Button variant="contained" color="primary" className={classes.button} onClick={() => this.handleChange('UT')}>
                          UPDATE TIME
                        </Button>
                      </TableCell>
                    </TableRow>
            {
              trackers.map(tracker => {
                  return (
                    <TableRow key={tracker.trackerID}>
                      <TableCell padding="default">{tracker.trackerID}</TableCell>
                      <TableCell padding="default">
                        <Button variant="contained" color="primary" className={classes.button} onClick={() => this.handleChange('CLEAN')}>
                          CLEAN
                        </Button>
                      </TableCell>
                      <TableCell padding="default">
                        <Button variant="contained" color="primary" className={classes.button} onClick={() => this.handleChange('STOW')}>
                          STOW
                        </Button>
                      </TableCell>
                      <TableCell padding="default">
                        <Button variant="contained" color="primary" className={classes.button} onClick={() => this.handleChange('STOP')}>
                          STOP
                        </Button>
                      </TableCell>
                      <TableCell padding="default">
                        <Button variant="contained" color="primary" className={classes.button} onClick={() => this.handleChange('AUTO')}>
                          AUTO
                        </Button>
                      </TableCell>
                    </TableRow>
                  )
              })
            }
            </TableBody>
        </Table> 
      </div>
    );
  }
}

CheckboxListSecondary.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxListSecondary);