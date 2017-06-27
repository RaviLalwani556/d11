var express = require('express'),
  app = express(),
  port = process.env.PORT || 51010,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://heroku_2t7xmcsx:b69padm1ni2pbrrbs5r5hvkn50@ds139362.mlab.com:39362/heroku_2t7xmcsx');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('./'));
app.get('/', function(req, res) {
    res.render('index.html');
});

var routes = require('./api/routes/todoListRoutes');
routes(app);


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
