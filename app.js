var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var mongoStore = require('connect-mongo')(session);
var sessionConf = require('./properties/sessionConf.js');
var app = express();

console.log(sessionConf.sessionKey);
mongoose.connect('mongodb://maden.kr/bloom');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
	console.log("bd is connected");
});


app.use(express.static(__dirname+'/views'));
app.set("sessionConf",sessionConf.sessionKey);
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

require('./routes/route.js').route(app);

var auth = express.Router();
require('./routes/auth.js').route(auth);
app.use('/auth',auth);

app.listen(7777,function(){
	console.log('asd');
});
