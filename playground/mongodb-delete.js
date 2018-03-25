// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('unable to connect to mongo db server');
  }
  console.log('connected to mongo db server');
  const db = client.db('TodosApp')

  // deleteMany
    // db.collection('Todos').deleteMany({text:'eat lunch'}).then((result)=> {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text:'eat lunch'}).then((result)=> {
  //   console.log(result);
  // });

  // findOneAndDelete
  db.collection('Todos').findOneAndDelete({completed:false}).then((result)=> {
    console.log(result);
  });


  // client.close();
});