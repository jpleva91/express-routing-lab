// - import express -
var express = require('express');
// - use express as app variable -
var app = express();
// - import body-parser - 
var bodyParser = require('body-parser');
// - import candyRouter -
var candyRouter = require('./candyRouter.js');

// - body parser middleware -
app.use(bodyParser.json());
// - candies middleware using candyRouter- 
app.use('/candies', candyRouter);

// - listen on port 3000 -
app.listen(3000);