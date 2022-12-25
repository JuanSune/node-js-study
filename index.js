const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('Welcome');
});

app.listen(8081);