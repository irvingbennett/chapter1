var mongodb = require('mongodb');
var movies = require('./movies');
var mongoclient = require('./connect');

var client = mongoclient(initMovies);

function initMovies(err, db) {
    if (err) {
        return console.dir(err);
    }
    var collection = db.collection('movies');
    collection.insert(movies);

}
