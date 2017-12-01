/*
 *  Inserts "doc" into the collection "movies".
 */
exports.insert = function(db, doc, callback) {
  // TODO: implement
  var collection = db.collection('movies');
  collection.insert(doc);
  callback(null);
};

/*
 *  Finds all documents in the "movies" collection
 *  whose "director" field equals the given director,
 *  ordered by the movie's "title" field. See
 *  http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#sort
 */
exports.byDirector = function(db, director, callback) {
  // TODO: implement
  var collection = db.collection('movies');
  var target = {director: director};
  var result = collection.find(target);
  // console.log(result);
  // return result;
  callback(null, result);
};
