import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import classNames from 'classnames'
import { Grid, Button, Checkbox, ListItemText } from '@material-ui/core';
import { connect } from 'react-redux'
import { trendsActions } from '../_actions'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      height: '90.5%'
    },
    formControl: {
      margin: theme.spacing.unit * 3,
      width: '70%',
      marginLeft: '0px',
      marginRight: '0px'
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: theme.spacing.unit / 4,
    },
    paper: {
        margin: theme.spacing.unit * 2,
        boxShadow: '0px 0px 1px 0px grey'
    },
    input: {
        margin: '20px'
    },
    button: {
        margin: 'auto',
        width: '60%'
    }
  });

class Trends extends React.Component {

    state = {
        parameters: [],
        trackers: [],
        data: null
      };

    setTrackers = event => {
        this.setState({ trackers: event.target.value });
    };

    setParameters = event => {
        this.setState({ parameters: event.target.value });
    };

    plot = event => {
        this.setState({ data: [
                {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
                {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
                {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
                {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
                {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
                {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
                {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
            ]
        })
    }

    render() {
        const { classes, theme, commissioningData, loaded } = this.props
        const parameters = [
            'SetPoint',
            'Actual angle',
            'Wind speed',
            'Motor current',
            'PV current',
            'PV voltage',
            'Battery voltage',
            'Battery current',
            'Battery SoC',
            'Controller temp',
            'Battery temp',
            'Ambient temp'
        ]

        return(
            loaded ? 
            <Grid container className={classNames("flex", classes.root)} justify="center" direction="row" alignItems="stretch">
                <Grid item xs={3} className={classNames("flex", classes.paper)}>
                  <Grid container direction="column" justify="center" alignItems="stretch">
                    <Grid item>
                    <FormControl className={classes.formControl} >
                    <InputLabel htmlFor="select-trackers">Select trackers</InputLabel>
                        <Select
                            multiple
                            value={this.state.trackers}
                            onChange={this.setTrackers}
                            input={<Input id="select-trackers" />}
                            renderValue={selected => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {commissioningData ? this.props.commissioningData.map(tracker => (
                            <MenuItem key={tracker.trackerID} value={tracker.trackerID}>
                                <Checkbox checked={this.state.trackers.indexOf(tracker.trackerID) > -1} />
                                <ListItemText primary={tracker.trackerID} />
                            </MenuItem>
                            )) : ""}
                        </Select>
                    </FormControl> 
                    </Grid>
                    <Grid item>
                    <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="select-parameters">Select parameters</InputLabel>
                        <Select
                            multiple
                            value={this.state.parameters}
                            onChange={this.setParameters}
                            input={<Input id="select-parameters" />}
                            renderValue={selected => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {parameters.map(parameter => (
                            <MenuItem key={parameter} value={parameter}>
                                <Checkbox checked={this.state.parameters.indexOf(parameter) > -1} />
                                <ListItemText primary={parameter} />
                            </MenuItem>
                            ))}
                        </Select>
                    </FormControl> 
                    </Grid>
                    <Grid item>
                    <Button variant="outlined" component="span" className={classes.button} onClick={this.plot}>
                        Plot
                    </Button>
                    </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6} className={classNames("flex", classes.paper)} >
                <div style={{ width:'100%', height:'100%' }} 
                    ref={ref => {
                        this.contentDiv = ref;
                    }}>
                {this.state.data ? 
                
                    <LineChart width={this.contentDiv.getBoundingClientRect().width} height={this.contentDiv.getBoundingClientRect().height} data={this.state.data}
                            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <Tooltip/>
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                : "select data to plot"}
                </div>
                </Grid>
            </Grid>
            : "LOADING"
        )
    }
}

function mapStateToProps(state) {
    const { loaded, commissioningData } = state.commissioning;
    return {
      commissioningData,
      loaded
    };
}
/*
const mapDispatchToProps = (dispatch) => ({
    getPlot: (trackers, parameters) => {
        dispatch(trendsActions.getPlot(trackers, parameters))
    }
})
*/
const connectedTrends = connect(mapStateToProps/*, mapDispatchToProps*/)(withStyles(styles, { withTheme: true })(Trends));
export { connectedTrends as Trends };