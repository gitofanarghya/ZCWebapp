import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import SelectDeviceList from './SelectDeviceList';
import {commandsActions} from '../_actions';
import classNames from 'classnames'

const styles = theme => ({
  root: {
    height: '90.5%',
    width: '100%',
    display: 'flex'
  },  
});

class Commands extends Component {

    constructor(props){
        super(props);
    }

    state={

    }

    render(){
        const { classes, commissioningData, sendCommand, loaded } = this.props;
        
        return (
          <div className={classes.root} >
            <Grid container className="flex" alignItems="stretch" direction="row" justify="space-around">
              <Grid item sm={6} className={classNames("flex", "")}>
                  {loaded && <SelectDeviceList trackers={commissioningData} sendCommand={sendCommand}/>}
              </Grid>
            </Grid>
          </div>
        );
    }
}

Commands.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  const { loaded, commissioningData } = state.commissioning;
  return {
      commissioningData,
      loaded
  };
}

const mapDispatchToProps = (dispatch) => ({
  sendCommand: (trackers, command) => {
      console.log(command)
      dispatch(commandsActions.sendCommand(trackers, command)) 
  }
})

const connectedCommands = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(Commands));
export { connectedCommands as Commands };