const templates = require('../templates');

module.exports = function(app, database) {

  app.post('/add', (req, res) => {
    if(req.body.role === "admin") {
      const dbCollection = database.db('all').collection('all-data');

      dbCollection.findOne({}, (err, result) => {

        const tests = [...result.tests];
        templates.test.id = 1 + tests[tests.length - 1].id
  
        tests.push(templates.test)
  
        const newData = {...result}
        newData.tests = tests;

        dbCollection.update({}, newData, null, (err, result) => {
          res.send(true)
        })

      });
    }
  })

}