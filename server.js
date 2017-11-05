var express = require('express'),
    cors = require('cors'),
    app = express(),
    port = process.env.PORT || 8080,
    mongoose = require('mongoose'),
    Task = require('./api/models/schoolInfoModel'), //created model loading here
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Schooldb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//app.get('index.html', function (req, res))
var routes = require('./api/routes/schoolInfoRoutes'); //importing route
routes(app); //register the route

app.listen(port);
console.log('School Info RESTFUL API server started on: ' + port);