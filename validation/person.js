const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePersonInput(data) {
  let errors = {};

  data.firstname = !isEmpty(data.firstname) ? data.firstname : "";
  data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.eventdate = !isEmpty(data.eventdate) ? data.eventdate : "";

  if (Validator.isEmpty(data.firstname)) {
    errors.firstname = "First name field is required";
  }

  if (Validator.isEmpty(data.lastname)) {
    errors.lastname = "Last name field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (Validator.isEmpty(data.eventdate)) {
    errors.eventdate = "Event date is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};