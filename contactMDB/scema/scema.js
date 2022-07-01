const mongoose = require('mongoose');
// const secema = { nama: String, nomorhp: String, email: String}
const secema = mongoose.model('datacontact', {
  nama: {
    type: String,
    require: true
  },
  nomorhp: {
    type: String,
    require: true
  },
  email: String
});


module.exports = {secema}