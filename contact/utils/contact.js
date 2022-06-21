// require() module core
const fs = require('fs');


// untuk mengecek apakah file data.json sudah ada atau belum
const cek = () => {
  if (!fs.existsSync('./data/data.json', 'utf8')) {
    try {
      fs.mkdirSync('./data', e => console.log(e))
      fs.writeFileSync('./data/data.json', '[]')
    } catch (e) {
    }
  } else {
    console.log('folder sudah ada')

  }
}
const cekdatajson = () => {
  cek()
  let data = fs.readFileSync('./data/data.json', 'utf8')
  let dataJson = JSON.parse(data)
  return dataJson
  console.log(dataJson)
}


const findContact = (data) => {
  let dataJson = cekdatajson()
  const dataFilter = dataJson.find(e => e.nama === data)
  return dataFilter
}
module.exports = {cekdatajson,findContact}