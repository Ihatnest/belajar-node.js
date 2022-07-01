const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/data');
const secema = { nama: String, nomorhp: String, email: String}
const Cat = mongoose.model('datacontact', secema);
// const arr = await Cat.find();
// const data = new Cat({ nama: 'Zildjianss', nomorhp: '0533250325235', email: 'sapi@gmali.com' })
// data.save()

const test = async () => {
  const data = await Cat.find({nama: 'Zildjianss'})
  console.log(data)
  // return d
  // return Cat.findOne({ nama: 'Zildjianss'}, function (err, docs) {
  //   if (err) {
  //     console.log(err)
  //   } else {
  //     let d = docs
  //     // console.log(docs.nama)
  //     console.log(d.nomorhp)
  //   }
  //   // return docs
  // })
}
test()
// console.log(test())

// const kitty = new Cat({ name: 'Zildjianss' });
// .save().then(() => console.log('meow'));

// console.log(tets())

