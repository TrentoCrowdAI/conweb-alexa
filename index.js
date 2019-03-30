var express = require('express');
const PORT = process.env.PORT || 443 ;
var createError = require('http-errors');
var path = require('path');
var logger = require('morgan');

var app = express();
//var upload = multer(); // for parsing multipart/form-data

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//app.use(bodyParser.json()); // for parsing application/json
//app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.get('/', function (req, res, next){
    res.render('index', {request: req});
});

app.post('/', function (req, res, next) {
  res.render('index', {request: req})
}); 

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))