// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('unable to connect to mongo db server');
  }
  console.log('connected to mongo db server');
  const db = client.db('TodosApp')

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5ab7c3f1b694dc2cb577aed2')
  },{
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })



  // client.close();
});