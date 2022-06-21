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
  }
}

const dataDariJson = () => {
  let data = fs.readFileSync('./data/data.json', 'utf8')
  let dataJson = JSON.parse(data)
  return dataJson
}

const cekdatajson = () => {
  cek()
  let dataJson = dataDariJson()
  return dataJson
  console.log(dataJson)
}


const findContact = (data) => {
  let dataJson = cekdatajson()
  const dataFilter = dataJson.find(e => e.nama === data)
  return dataFilter
}

const penambahData = (Input) => {
  let dataInput = Input
  let data = fs.readFileSync('./data/data.json', 'utf8')
  let dataJson = JSON.parse(data)
  dataJson.unshift(dataInput)
  fs.writeFileSync('./data/data.json', JSON.stringify(dataJson))
}

const hapusData = (nama) => {
  const dataJson = dataDariJson()
  const dataFilter = dataJson.find(e => e.nama === nama)
  if (dataFilter) {
    const index = dataJson.indexOf(dataFilter)
    console.log(index)
    dataJson.splice(index, 1)
    fs.writeFileSync('./data/data.json', JSON.stringify(dataJson))
    console.log(`data ${nama} berhasil dihapus`)
  } else {
    console.log(`data ${nama} tidak ditemukan`)
  }
}

cekdup = (data) => {
  let dataJson = cekdatajson()
  let dataFilterDupNama = dataJson.find(e => e.nama === data)
  if (dataFilterDupNama) {
    throw new Error(`nama ${data} sudah ada`)
    return false
  }
}
module.exports = {cekdatajson,findContact,penambahData,hapusData,cekdup}