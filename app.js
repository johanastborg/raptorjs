var express = require('express');
var http = require('http');
var app = express();
var raptor = require('./raptor.js');

app.listen(3000);
console.log('Listening on port 3000');

// Example usage of Raptor, rapid REST prototyping and development
var r = new raptor(app, '127.0.0.1', 8080);
//r.get('/johan/:id', function (req, res) { r.mockResReq(req, res); });
//r.post('/eval', function (req, res) { r.mockResReq(req, res); });
r.post('/eval', function (req, res) { r.doForwardRequest(req, res, '/eval', 'POST'); });
