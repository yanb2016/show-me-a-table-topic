const express = require('express');
const passport = require('passport');
const router = express.Router();
const validator = require('validator');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


router.post('/signup', jsonParser, (req, res, next) => {
  const validationResult = validateSignupForm(req.body);
  if(!validationResult.success) {
    console.log('validationResult failed');
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    });
  }
  return passport.authenticate('local.signup', (err) => {
    if(err) {
      console.log('here' + err);
      if(err.name === 'MongoError' && err.code === 11000) {
        return res.status(409).json({
          success: false,
          message: 'Check the form for errors',
          errors: {
            email: 'This email is already taken.'
          }
        })
      }
      return res.status(400).json({
        success: false,
        message: 'Could not process the form'
      });
    }
    return res.status(200).json({
      success: true,
      message: 'You have successfully signed up!'
    });
  })(req, res, next)
});

router.post('./login', jsonParser, (req, res, next) => {
  console.log(req.body);
  const validationResult = validateLoginForm(req.body);
  if(!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }
  return passport.authenticate('local-login', (err, token, userData) => {
    if(err) {
      if(err.name === 'IncorrectCredentialsError') {
        return res.status(400).json({
          success: false,
          message: err.message
        });
      }
      return res.status(400).json({
        success:false,
        message: 'Cound not process the form' + err.message
      });
    }
    return res.json({
      success: true,
      message: 'You have successfully logged in',
      token, user: userData
    });
  })(req, res, next);
})

function validateSignupForm(payload) {
  // console.log(payload);
  // console.log(payload.password.length);
  const errors = {};
  let isFormValid = true;
  let message = '';
  if(!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
    isFormValid = false;
    errors.email = 'Please proveid a correct email';
  }
  if(!payload || typeof payload.password !== 'string' || payload.password.length < 8) {
    isFormValid = false;
    errors.password = 'Password must have 8 characters with numbers and letters';
  }
  if(!isFormValid) {
    message = 'Check the form for errors';
  }
  return {
    success: isFormValid,
    message,
    errors
  }
}

function validateLoginForm(payload) {
  console.log(payload);
  const errors = {};
  let isFormValid = true;
  let message = '';
  if(!payload || typeof payload.email !== 'string' || paylaod.email.trim().length === 0) {
    isFormValid = false;
    errors.email = 'Please provide your email address';
  }
  if(!payload || typeof payload.password !== 'string' || payload.password.length === 0){
    isFormValid = false;
    errors.password = 'Pleaser provide your password';
  }
  if(!isFormValid) {
    message = 'Check the form errors';
  }
  return {
    success: isFormValid,
    message,
    errors
  }
}

module.exports = router;