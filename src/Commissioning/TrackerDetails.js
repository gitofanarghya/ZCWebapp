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
  },
  innerRow: {
    border: 'none !important'
  },
  outerRow: {
    borderRight: '1px solid #e0e0e0'
  }
});

function TrackerDetails(props) {
  const { classes, trackerDetails, trackerID, deviceID } = props;

  const data = trackerDetails
  
  return (
    <Paper className={classes.root}>
        <Typography className={classes.heading} variant="headline" component="h3">
          <p>Tracker Details</p>
        </Typography>
        <Table className={classes.table}>
            <TableHead>
            <TableRow>
                <TableCell padding="dense"><Typography variant="body2">ID</Typography></TableCell>
                <TableCell padding="dense">
                  <Table>
                    <TableBody>
                          <TableRow>
                            <TableCell className={classes.innerRow} padding="dense"><Typography variant="body2">Tracker ID</Typography></TableCell>
                            <TableCell className={classes.innerRow} padding="dense"><Typography variant="body2">{trackerID}</Typography></TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className={classes.innerRow} padding="dense"><Typography variant="body2">Device ID</Typography></TableCell>
                            <TableCell className={classes.innerRow} padding="dense"><Typography variant="body2">{deviceID}</Typography></TableCell>
                          </TableRow>
                    </TableBody>
                  </Table>
                </TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {
              Object.keys(data).map(property => {
                if (data.hasOwnProperty(property)) {
                  return (
                    <TableRow key={property}>
                      <TableCell className={classes.outerRow} padding="dense"><Typography variant="body2">{property}</Typography></TableCell>
                      <TableCell padding="dense">
                      <Table>
                        <TableBody>
                        {Object.keys(data[property]).map(e => {
                          if (data[property].hasOwnProperty(e)) {
                            return (
                              <TableRow key={e}>
                                <TableCell className={classes.innerRow} padding="dense"><Typography variant="body2">{e}</Typography></TableCell>
                                <TableCell className={classes.innerRow} padding="dense"><Typography variant="body2">{data[property][e]}</Typography></TableCell>
                              </TableRow>
                            )
                          }
                        })}
                        </TableBody>
                      </Table>
                      </TableCell>
                    </TableRow>
                  )
                }
              })
            }
            </TableBody>
        </Table>  
    </Paper>
  );
}

TrackerDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TrackerDetails);