const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
var http = require('http');
var socketIO = require('socket.io');
var io = socketIO();
var restRouter = require('./routes/rest');
var auth =require('./routes/auth');
var editorSocketService = require('./services/editorSocketService')(io);
const app = express();  
app.use(express.static(path.join(__dirname, '../public')));
app.use(morgan('dev'));
mongoose.connect('mongodb://user:user123@ds147030.mlab.com:47030/problems');
const port = process.env.PORT || 3001;
app.use('/api/v1', restRouter);
app.use('/auth', auth);
// If the url does not handled by router on the server side
// then the server send index.html from the public folder
app.use((req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../public')});
  })
const server = http.createServer(app);
io.attach(server);
server.listen(port);
server.on('listening', onListening);
function onListening() {
  console.log(`App is listening on ${port}`);
}