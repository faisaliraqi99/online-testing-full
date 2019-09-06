module.exports = function(app, database) {

  app.get('/', (req, res) => {

    database.db('all').collection('all-data').findOne({}, (err, result) => {
      if(err) return res.send(err);
      else res.send(result);
    });

  });

}