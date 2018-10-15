import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import classNames from 'classnames'
import DeviceList from './DeviceList';
import TrackerDetails from './TrackerDetails';
import { commissioningActions } from '../_actions';
import { Loading } from '../_components';

const styles = theme => ({
    root: {
        height: '90.5%',
        width: '100%',
        display: 'flex'
    },  
});

class Commissioning extends Component {

    constructor(props){
        super(props);
    }

    state = {
        trackerID: "",
        deviceID: ""
    }

    getTrackerDetails = (trackerID) => {
        this.props.getCurrentTrackerInfo(trackerID)
        const deviceID = this.props.commissioningData.find(e => e.trackerID === trackerID).controllerInfo.macID
        this.setState({
            trackerID,
            deviceID
        })
    }

    render(){
        const { classes, loaded, commissioningData, selectedTrackerDetails, loadedTrackerInfo } = this.props;
        
        return (
            <div className={classes.root} >
                <Grid container className="flex" alignItems="stretch" direction="row" justify="space-around">
                    <Grid item sm={6} className={classNames("flex", "")}>
                        { loaded ? <DeviceList devices={commissioningData} getTrackerDetails={this.getTrackerDetails}/> : <Loading /> }
                    </Grid>
                    <Grid item sm={6} className={classNames("flex", "")}>
                        { loadedTrackerInfo ? <TrackerDetails 
                                                deviceID={this.state.deviceID}
                                                trackerID={this.state.trackerID} 
                                                trackerDetails={selectedTrackerDetails.UpdateData}/> : <Loading /> }
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Commissioning.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    const { loaded, commissioningData, selectedTrackerDetails, loadedTrackerInfo } = state.commissioning;
    return {
        commissioningData,
        loaded,
        loadedTrackerInfo,
        selectedTrackerDetails
    };
}

const mapDispatchToProps = (dispatch) => ({
    getCurrentTrackerInfo: (trackerID) => {
        dispatch(commissioningActions.getCurrentTrackerInfo(trackerID)) 
    }
})

const connectedCommissioning = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(Commissioning));
export { connectedCommissioning as Commissioning };