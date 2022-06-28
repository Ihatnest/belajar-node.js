const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/data');
const secema = { name: String, }
const Cat = mongoose.model('data', secema);
// const arr = await Cat.find();

const tets =
  // return d
  Cat.find({ name: 'Zildjianss' }, function (err, docs) {
    if (err) {
      console.log(err)
    } else {
      return docs
    }
    // return docs
  });


// const kitty = new Cat({ name: 'Zildjianss' });
// .save().then(() => console.log('meow'));
console.log(tets)

