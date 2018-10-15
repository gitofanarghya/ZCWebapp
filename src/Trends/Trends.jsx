import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: 'calc(100% - 80px)',
    height: 'calc(100% - 80px)',
    padding:'40px',
  },
  paper: {
    textAlign: 'center',
    color: 'silver',
  },
  
});

class Trends extends Component {

    constructor(props){
        super(props);
    }

    state={

    }

    render(){
        const { classes } = this.props;
        
        return (
            <div className={classes.root} >
            <Grid container spacing={24}>
              "Trends"
            </Grid>
            </div>
        );
    }
}

Trends.propTypes = {
  classes: PropTypes.object.isRequired,
};


  const mapStateToProps = (state) => {
    return {  };
  }


const connectedTrends = connect(mapStateToProps)(withStyles(styles, { withTheme: true })(Trends));
export { connectedTrends as Trends };