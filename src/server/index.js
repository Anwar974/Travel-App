let projectData = {};


const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const async = require('express-async-errors')
const dotenv = require('dotenv');
require('dotenv').config();
const cors = require('cors')
const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('dist/index.html'));
// 
});


app.post('/postData',function (req,res){
    projectData['to'] = req.body.to;
    projectData['from'] = req.body.from;
    projectData['temperature'] = req.body.temperature;
    projectData['weather_condition'] = req.body.weather_condition;
    projectData['daystogo'] = req.body.daystogo;
    projectData['cityImage']  = req.body.cityImage;
    projectData['date'] = req.body.date;

    res.send(projectData);
});


app.listen(8089, () => {
        console.log('Server running on port 8089');
});

module.exports = app;