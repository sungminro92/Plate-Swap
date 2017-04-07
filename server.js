const express = require('express');
const app = express();
angular = require('angular');

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000, function() {
  console.log('App listening successfully bruh');
});

