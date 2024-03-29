var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testRouter = require('./routes/test');
var fornecedorRouter = require('./routes/fornecedor');

var app = express();

const cors = require('cors')
app.use(cors())

const db = require('./config/database');
db('mongodb://localhost:27017/4not2020');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/test', testRouter);
app.use('/fornecedor', fornecedorRouter);

module.exports = app;
