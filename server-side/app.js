var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var config = require('./config/config')
require('./models/main').connect(config.mongoDbUri, { useNewUrlParser: true });
var port = process.env.PORT || 3003 ;
var path = require('path');
var passport = require('passport');
var restRouter = require('./routes/rest');
var editor = require('./routes/editor');
var auth =require('./routes/auth');
var app = express();
// var authChecker = require('./auth/auth_checker');

//passport 
app.use(bodyParser.json());
app.use(passport.initialize());
passport.use('local-signup', require('./auth/signup_local_strategy'));
passport.use('local-login', require('./auth/login_local_strategy'));

app.use(express.static(path.join(__dirname, '../public')));
app.use(morgan('dev'));

app.use('/auth', auth);
app.use('/api/v1', restRouter);
// app.use('/editor', authChecker);
app.use('/editor', editor);
app.use((req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../public')});
  })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))