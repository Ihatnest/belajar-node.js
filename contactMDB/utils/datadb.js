const { MongoClient, ObjectId } = require('mongodb');
const { cekdatajson } = require('./contact');
const dbName = ('data')
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);


const cekdata = () => {
  client.connect((err, client) => {
    if (err) { console.log(err) }
    const db = client.db(dbName)
    db.collection('dataContact').find().toArray((err,result) => {
      if (err) throw err
      let cek = result
      // console.log(cek)
      return cek
    })
  })
}




module.exports = { cekdata }
