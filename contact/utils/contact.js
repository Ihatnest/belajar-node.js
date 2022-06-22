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
  console.log(Input)
  let dataInput = Input
  let data = fs.readFileSync('./data/data.json', 'utf8')
  console.log(data)
  let dataJson = JSON.parse(data)
  console.log(dataJson)
  console.log(Input)
  
  dataJson.unshift(dataInput)
  console.log(dataJson)
  fs.writeFileSync('./data/data.json', JSON.stringify(dataJson))
}

const hapusData = (nama) => {
  console.log(nama)
  const dataJson = dataDariJson()
  const dataFilter = dataJson.find(e => e.nama === nama)
  console.log(dataFilter)
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
const updateEdit = (nama) => {
  const dataJson = dataDariJson()
  console.log(nama)
  const dataFilter = dataJson.find(e => e.nama === nama.oldName)
  if (dataFilter) {
    const index = dataJson.indexOf(dataFilter)
    console.log(index)
    dataJson.splice(index, 1, nama)
    fs.writeFileSync('./data/data.json', JSON.stringify(dataJson))
    console.log(`data ${nama} berhasil diedit`)
  } else {
    console.log(`data ${nama} tidak ditemukan`)
  }
}

const cekdup = (data) => {
  let dataJson = cekdatajson()
  let dataFilterDupNama = dataJson.find(e => e.nama === data)
  if (dataFilterDupNama) {
    throw new Error(`Nama ${data} sudah ada`)
    return false
  }
}
module.exports = {cekdatajson,findContact,penambahData,hapusData,cekdup,updateEdit}