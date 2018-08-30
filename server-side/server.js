const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const config = require('./config/config')
require('./models/main.js').connect(config.mongoDbUri, { useNewUrlParser: true });
const port = process.env.PORT || 3000 ;
const path = require('path');
const passport = require('passport');
const restRouter = require('./routes/rest');
const editor = require('./routes/editor');
const auth =require('./routes/auth');
const app = express();
const authChecker = require('./auth/auth_checker');

//passport 
app.use(bodyParser.json());
app.use(passport.initialize());
passport.use('local-signup', require('./auth/signup_local_strategy'));
passport.use('local-login', require('./auth/login_local_strategy'));

app.use(express.static(path.join(__dirname, '../public')));
app.use(morgan('dev'));

app.use('/auth', auth);
app.use('/api/v1', restRouter);
app.use('/editor', authChecker);
app.use('/editor', editor);
app.use((req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../public')});
  })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))