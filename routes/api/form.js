const express = require("express");
const router = express.Router();

// Input Validation
const validatePersonInput = require("../../validation/person");

// Person model
const Person = require("../../models/Person");

// @route   GET api/form/test
// @desc    Test form route
router.get("/test", (req, res) => res.json({ msg: "Form works" }));

// @route   POST api/form
// @desc    Add new person to database
router.post("/", (req, res) => {
  const { errors, isValid } = validatePersonInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newPerson = new Person({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    eventdate: req.body.eventdate
  });

  newPerson.save().then(person => res.json(person));
});

module.exports = router;