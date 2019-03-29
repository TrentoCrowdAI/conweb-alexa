var https = require('https');
const Alexa = require('ask-sdk-core');
var app_port = process.env.app_port || 443;
var app_host = process.env.app_host || '127.0.0.1';

https.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(req);
    res.end();
}).listen(app_port);
console.log('Web server running at http://' + app_host + ':' + app_port);