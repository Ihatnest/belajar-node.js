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
// untuk mengecek apakah file data.json sudah ada atau belum (penutup)

// mengambil data dari json
const dataDariJson = () => {
  let data = fs.readFileSync('./data/data.json', 'utf8')
  let dataJson = JSON.parse(data)
  return dataJson
}
// mengambil data dari json (penutup)

// mengecek ddata dan mengambil data dari json
const cekdatajson = () => {
  cek()
  let dataJson = dataDariJson()
  return dataJson
  console.log(dataJson)
}
// mengecek ddata dan mengambil data dari json (penutup)

// untuk menggambil data dari json 
const findContact = (data) => {
  let dataJson = cekdatajson()
  const dataFilter = dataJson.find(e => e.nama === data)
  return dataFilter
}
// untuk menggambil data dari json (penutup)

//  untuk menambahkan data dari user
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
//  untuk menambahkan data dari user (penutup)

// untuk mengahapus data 
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
// untuk mengahapus data (penutup)

// untuka edit data dari user
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
// untuk edit data dari user (penutup)

// untuk validasi duplikasi nama 
const cekdupNama = (data) => {
let dataJson = cekdatajson()
  let dataFilterDupNama = dataJson.find(e => e.nama === data)
  if (dataFilterDupNama) {
    throw new Error(`Nama ${data} sudah ada`)
    return false
  }
}
const cekdupEmail = (data) => {
let dataJson = cekdatajson()
  let dataFilterDupNama = dataJson.find(e => e.nama === data)
  if (dataFilterDupNama) {
    throw new Error(`Nama ${data} sudah ada`)
    return false
  }else{
    return true
  }
}
// untuk validasi duplikasi nama (pentup) 

// untuk export (script ke appp.js)
module.exports = {cekdatajson,findContact,penambahData,hapusData,cekdupNama,updateEdit,cekdupEmail}