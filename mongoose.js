var mongoURI = "mongodb://localhost:27017/blog";
var mongoose = require("mongoose");
var MongoDB = mongoose.connect(mongoURI).connection;
MongoDB.on('error', function(err) { console.log(err); });
MongoDB.once('open', function() {
  console.log("mongodb connection open");
});