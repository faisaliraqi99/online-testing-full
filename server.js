const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const dbConfig = require('./app/config/db');
const app = express();
const routes = require('./app/routes');

const port = 8000;

dbConfig.settings = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(dbConfig.url, dbConfig.settings, (err, database) => {

  if(err) return console.log(err);
  routes(app, database);

  app.listen(port, () => {
    console.log('We are on ' + port)
  });

})