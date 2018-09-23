import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Material-ui
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/core/styles/withStyles';


const propTypes = {
  classes: PropTypes.shape({
    container: PropTypes.string.isRequired,
    textField: PropTypes.string.isRequired,
    submit: PropTypes.string.isRequired,
  }).isRequired,
  addNewPerson: PropTypes.func.isRequired,
  resetSuccess: PropTypes.func.isRequired,
  success: PropTypes.bool.isRequired,
  errors: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    email: PropTypes.string,
    eventdate: PropTypes.string,
  }).isRequired,
};

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      eventdate: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { success, resetSuccess } = this.props;

    if (success && !prevProps.success) {
      this.resetState();
      resetSuccess();
    }
  }

  resetState() {
    this.setState({
      firstname: '',
      lastname: '',
      email: '',
      eventdate: '',
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      firstname,
      lastname,
      email,
      eventdate,
    } = this.state;
    const { addNewPerson } = this.props;

    const newPerson = {
      firstname,
      lastname,
      email,
      eventdate,
    };

    addNewPerson(newPerson);
  }

  render() {
    const {
      firstname,
      lastname,
      email,
      eventdate,
    } = this.state;
    const { classes, errors } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
        <TextField
          required
          fullWidth
          id="firstname"
          label="Firstname"
          className={classes.textField}
          value={firstname}
          onChange={this.handleChange}
          name="firstname"
          error={!!errors.firstname}
          helperText={errors.firstname}
          margin="normal"
          variant="outlined"
        />
        <TextField
          required
          fullWidth
          id="lastname"
          label="Lastname"
          className={classes.textField}
          value={lastname}
          onChange={this.handleChange}
          name="lastname"
          error={!!errors.lastname}
          helperText={errors.lastname}
          margin="normal"
          variant="outlined"
        />
        <TextField
          required
          fullWidth
          id="email"
          label="email"
          className={classes.textField}
          value={email}
          onChange={this.handleChange}
          type="email"
          name="email"
          autoComplete="email"
          error={!!errors.email}
          helperText={errors.email}
          margin="normal"
          variant="outlined"
        />
        <TextField
          required
          fullWidth
          id="eventdate"
          label="Event Date"
          type="date"
          value={eventdate}
          onChange={this.handleChange}
          className={classes.textField}
          error={!!errors.eventdate}
          helperText={errors.eventdate}
          name="eventdate"
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          variant="outlined"
        />
        <Button
          id="submit"
          type="submit"
          fullWidth
          variant="raised"
          color="primary"
          className={classes.submit}
        >
          Submit
        </Button>
      </form>
    );
  }
}

Form.propTypes = propTypes;

export default withStyles(styles)(Form);
