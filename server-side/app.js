var express = require('express');
var authChecker = require('./auth/auth_checker')
var cors = require('cors');
var bodyParser = require('body-parser');
//var logger = require('morgan');
var passport = require('passport');
var path = require('path');
var index = require('./routes/index');
var news = require('./routes/news');

var config = require('./config/config.json');
require('./models/main.js').connect(config.mongoDbUri, { useNewUrlParser: true });
var app = express();
// Load passport strategy
app.use(bodyParser.json());
app.use(passport.initialize());
passport.use('local-signup', require('./auth/signup_local_strategy'));
passport.use('local-login', require('./auth/login_local_strategy'));


// view engine setup
app.set('views', path.join(__dirname, '../client/build'));
app.set('view engine', 'jade');
app.use('/static', express.static(path.join(__dirname, '../client/build/static')));

// allow cross   
// TODO: remove after developing
// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   next();
// });
app.use(cors());

//app.use(logger('dev'));
app.use('/', index);
app.use('/newTopic', authChecker);
app.use('/newTopic', newTopic);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404);
});


module.exports = app;
