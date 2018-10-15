import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import classNames from 'classnames';
import { wifiActions } from '../_actions'

const styles = theme => ({
  
  
});

class Wifi extends Component {

    state = {
        ssid: '',
        password: '',
        submitted: false
    };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
    const { ssid, password } = this.state;
    console.log(ssid, password)
    if (ssid && password) {
        this.props.setWifiInfo(ssid, password);
    }
  }

    render(){
        const { classes } = this.props;
        
        return (
            <div className={classes.root} >
            <Grid container className="flex" alignItems="stretch" direction="row" justify="center">
              <Grid item sm={6} className={classNames("flex", "")}>
              <Card className={classes.card}>
                  <CardContent>
                      <form onSubmit={this.handleSubmit}>
                          <TextField
                              name="ssid"
                              label="SSID"
                              placeholder="Enter the ssid"
                              className="ssid-field"
                              margin="normal"
                              onChange={this.handleChange}
                              fullWidth
                          />
                          <br />
                          <TextField
                              name="password"
                              label="Password"
                              className="password-field"
                              placeholder="Enter the password"
                              type="password"
                              autoComplete="current-password"
                              margin="normal"
                              onChange={this.handleChange}
                              fullWidth
                          />
                          <br />
                          <br />
                          <center><Button type="submit" className="submit-button">
                              Connect
                          </Button></center>
                      </form>
                  </CardContent>
              </Card>
            </Grid>
            </Grid>
            </div>
        );
    }
}

Wifi.propTypes = {
  classes: PropTypes.object.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
    setWifiInfo: (ssid, pass) => {
        dispatch(wifiActions.setWifiInfo(ssid, pass)) 
    }
  })

const connectedWifi = connect(null, mapDispatchToProps)(withStyles(styles, { withTheme: true })(Wifi));
export { connectedWifi as Wifi };