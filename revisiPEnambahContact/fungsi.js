const fs = require('fs');
const main = require('./main')
const {isEmail,isMobilePhone} = require('validator');

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

// filter data
const filterData = () => {
  let dataFilterCmd = {
    nama: main.dataCmd.nama,
    nohp: main.dataCmd.nohp,
    email: main.dataCmd.email
  };
  let data = fs.readFileSync('./naga/data.json', 'utf8')
  let dataJson = JSON.parse(data)
  // filter duplicate
  let dataFilterDupNama = dataJson.find(e => e.nama === dataFilterCmd.nama)
  if (dataFilterDupNama) {
    console.log(`gunakan nama yang lain`)
    return false
  }
  let dataFilterDupNohp = dataJson.find(e => e.nohp === dataFilterCmd.nohp)
  if (dataFilterDupNohp) {
    console.log(`gunakan nomor hp yang lain`)
    return false
  }
  let dataFilterDupEmail = dataJson.find(e => e.email === dataFilterCmd.email)
  if (dataFilterDupEmail) {
    console.log(`gunakan email yang lain`)
    return false
  }
  // filter duplicate tutup
  // filter nomor hp
  let dataFilterNohp = isMobilePhone(dataFilterCmd.nohp, 'id-ID')
  if (!dataFilterNohp) {
    console.log(`nomor hp tidak valid`)
    return false
  }
  if (dataFilterCmd.email){
    if (!isEmail(dataFilterCmd.email)) {
    console.log(`email tidak valid`)
      return false
    }
  }
  
  // filter email

  penambahData()
}

// untuk menambah data
const penambahData = () => {
  let dataContact = main.dataCmd;
  let data = fs.readFileSync('./naga/data.json', 'utf8')
  let dataJson = JSON.parse(data)
  dataJson.push(dataContact)
  fs.writeFileSync('./naga/data.json', JSON.stringify(dataJson))
  console.log(`data ${dataContact.nama} berhasil ditambahkan`)

}
module.exports = {penambahData,filterData}


