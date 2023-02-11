var http = require('http'),
parse = require('url').parse,
join = require('join'),
fs = require('fs'),
root = join(__dirname, 'www'),
PORT = 3400

server = http.createServer(function(req, res))