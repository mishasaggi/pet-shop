var Path = require('path');
var browserify = require('browserify-middleware');
var express = require('express');
var app = express();

//
// Serve a browserified file for GET /scripts/app-bundle.js
//
var shared = ['mithril']
app.get('/scripts/vendor-bundle.js', browserify(shared))
app.get('/scripts/app-bundle.js', browserify('./client/main.js', { external: shared }));

//
// Non-js static files
//
app.use(express.static('client/public'));

var port = process.env.PORT || 4000;
app.listen(port);
console.log("Listening on port", port);
