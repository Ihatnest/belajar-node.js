// require() module core
const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const main = require('./main')


// untuk mengecek apakah file data.json sudah ada atau belum
const cek = () => {
  if (!fs.existsSync('./naga/data.json', 'utf8')) {
    try {
      fs.mkdirSync('./naga', e => console.log(e))
      fs.writeFileSync('./naga/data.json', '[]')
    } catch (e) {
    }
  } else {
    console.log('folder sudah ada')

  }
}
cek()

// untuk mebuat pertanyaan
const pertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, e => {
      resolve(e);
    })
  })
}

// untuk menambah data
const penambahData = () => {
  // menampung data dari pertanyaan
  let dataContact = main.dataPertanyaan;
  // mengambil isi dari file data.json
  let data = fs.readFileSync('./naga/data.json', 'utf8')
  // mengubah isi dari file data.json menjadi json
  let dataJson = JSON.parse(data)
  // menambahkan dataContact ke dalam dataJson
  dataJson.push(dataContact)
  // mengubah dataJson menjadi string
  fs.writeFileSync('./naga/data.json', JSON.stringify(dataJson))
  console.log(`data ${dataContact.nama} berhasil ditambahkan`)
  // untuk menutup program
  rl.close();
}
// untuk exports ke main.js
module.exports = {
  pertanyaan,
  penambahData
}


