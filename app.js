var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var mongoStore = require('connect-mongo')(session);
var app = express();

mongoose.connect('mongodb://maden.kr/bloom');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
	console.log("bd is connected");
});

app.use(morgan('combined'));
app.use(bodyParser.json())
app.use(cookieParser());
app.use(session({
	secret: 'anyStringToEncrypt',
	saveUninitialized: true,
	resave :true,
	store: new mongoStore({
		mongooseConnection: db,
		ttl: 2*24*60*60
	})
}));


//define



require('./route.js').route(app);

app.listen(7777,function(){
	console.log('asd');
});