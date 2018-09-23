import React from 'react';
import PropTypes from 'prop-types';

// Material-ui
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';

import Form from '../containers/Form';

const propTypes = {
  classes: PropTypes.shape({
    layout: PropTypes.string.isRequired,
    paper: PropTypes.string.isRequired,
  }).isRequired,
};

const styles = theme => ({
  layout: {
    width: 'auto',
    minWidth: 400,
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
});

export const App = ({ classes }) => (
  <React.Fragment>
    <CssBaseline />
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Form />
      </Paper>
    </main>
  </React.Fragment>
);

App.propTypes = propTypes;

export default withStyles(styles)(App);
