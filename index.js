
var express = require("express");
var alexa = require("alexa-app");

var PORT = process.env.PORT || 8080;
var app = express();

// ALWAYS setup the alexa app and attach it to express before anything else.
var alexaApp = new alexa.app("test");

alexaApp.express({
  expressApp: app,
  //router: express.Router(),

  // verifies requests come from amazon alexa. Must be enabled for production.
  // You can disable this if you're running a dev environment and want to POST
  // things to test behavior. enabled by default.
  checkCert: false,

  // sets up a GET route when set to true. This is handy for testing in
  // development, but not recommended for production. disabled by default
  debug: true
});

// now POST calls to /test in express will be handled by the app.request() function

// from here on you can setup any other express routes or middlewares as normal
app.set("view engine", "ejs");

alexaApp.launch(function(request, response) {
  response.say("You launched the app!");
});

alexaApp.intent('HelloWorldIntent', {
  "utterances": ["Hello world"]
}, function(req, res) {
  res.say('Hello to you');
});

app.listen(PORT, () => console.log("Listening on port " + PORT + "."));

/*var express = require('express');
const PORT = process.env.PORT || 8080 ;
var createError = require('http-errors');
var path = require('path');
var logger = require('morgan');
const Alexa = require('ask-sdk-core');

const skillID ="amzn1.ask.skill.8e874ee7-ad2f-4b42-90ec-5e9490c965e3";

var app = express();
//var upload = multer(); 
// for parsing multipart/form-data

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}))
app.get('/', function (req, res, next){
    res.render('index', {request: req});
  console.log(`request on get: ${ req.body }`);
});

app.post('/', function (req, res, next) {
    console.log(`request on post: ${ req.body.session.type.application.applicationId }`);
    clientId = req.body.session.type.application.applicationId;
    if (clientId == skillID)
        console.log("Id checked")
    //console.log(`request on post: ${ req.body.request.type }`);
    //console.log(`request on post: ${ req.body.request.timestamp }`);
    //console.log(`request on post: ${ req.body.request.requestId }`);
    //console.log(`request on post: ${ req.body.request.locale }`);
    //console.log(`request on post: ${ req.body.request.reason }`);
    //console.log(`request on post: ${ req.body.request.error.type }`);
    //console.log(`request on post: ${ req.body.request.error.message }`);
    

    res.json();
    console.log('response sended')
}); 

app.listen(8080, () => console.log(`Listening on ${ PORT}`))*/