const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000, function() {
  console.log('App listening successfully bruh');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

mongoose.connect('mongodb://localhost:27017/barrels')