const all = require('./all');
const addTest = require('./add-test');

module.exports = function(app, db) {
  all(app, db);
  addTest(app, db);
}