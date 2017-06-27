var express = require('express'),
  app = express(),
  port = process.env.PORT || 51010,
  db_url = process.env.DATABASE_URL,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect(db_url);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('./'));
app.get('/', function(req, res) {
    res.render('index.html');
});

var routes = require('./api/routes/todoListRoutes');
routes(app);


app.listen(port);


console.log('todo list RESTful API server started on: ' + port + ' with db ' + db_url);
