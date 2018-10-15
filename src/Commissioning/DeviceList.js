import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  heading: {
    paddingLeft: '24px'
  }
});

function DeviceList(props) {
  const { classes, devices } = props;

  const data = devices
    
  return (
    <Paper className={classes.root}>
        <Typography className={classes.heading} variant="headline" component="h3">
          <p>Trackers Discovered</p>
        </Typography>
        <Table className={classes.table}>
            <TableHead>
            <TableRow>
                <TableCell padding="dense"><Typography variant="subheading">Row ID</Typography></TableCell>
                <TableCell padding="dense"><Typography variant="subheading">Device ID</Typography></TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {data.map(n => {
                return (
                <TableRow 
                  hover
                  onClick={() => props.getTrackerDetails(n.trackerID)}
                  key={n.trackerID}
                >
                    <TableCell padding="dense">{n.trackerID}</TableCell>
                    <TableCell padding="dense">{n.controllerInfo.macID}</TableCell>
                </TableRow>
                );
            })}
            </TableBody>
        </Table>  
    </Paper>
  );
}

DeviceList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DeviceList);