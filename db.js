var mongoose = require('mongoose');

var url = 'mongodb://ethan:ethan@ds033337.mongolab.com:33337/flights'
mongoose.connect(url);

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ');
});

// If the connection throws an error
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});


module.exports = mongoose.connection;
module.exports.url = url;