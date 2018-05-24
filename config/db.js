/*
 * Database connectivity
 */
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/testapp');


//check if we are connected successfully or not
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

module.exports = db;
