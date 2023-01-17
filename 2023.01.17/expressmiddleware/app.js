var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

const cors = require('cors');
app.use(cors());

// authorization middleware
const apiKeys = ['azerty123', 'supersecretapikey'];

app.use('/message', (req, res) => {
  const apiKeyMatch = apiKeys.some(e => e === req.headers.key);
  if(apiKeyMatch){
    res.status(200).send({result: true, message: 'Hello world!'});
  } else {
    res.status(403).send({result: false, error: 'Invalid API key'});
  }

});
  


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;
