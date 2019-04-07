var express = require('express');
var app = express();
const PORT = 3000;

app.get('/about', function (req, res) {
    res.send('about');
  });

  
