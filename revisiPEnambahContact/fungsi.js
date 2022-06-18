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
const dataDariJson = () => {
  let data = fs.readFileSync('./naga/data.json', 'utf8')
  let dataJson = JSON.parse(data)
  return dataJson

}

// untuk menambah data
const penambahData = () => {
  let dataContact = main.dataCmd;
  const dataJson = dataDariJson()
  dataJson.push(dataContact)
  fs.writeFileSync('./naga/data.json', JSON.stringify(dataJson))
  console.log(`data ${dataContact.nama} berhasil ditambahkan`)
}

// untuk menghapus data
const hapusData = (nama) => {
  const dataJson = dataDariJson()
  console.log(dataJson)
  const dataFilter = dataJson.find(e => e.nama === main.dataCmdDelete.nama)
  if (dataFilter) {
    const index = dataJson.indexOf(dataFilter)
    console.log(index)
    dataJson.splice(index, 1)
    fs.writeFileSync('./naga/data.json', JSON.stringify(dataJson))
    console.log(`data ${main.dataCmdDelete.nama} berhasil dihapus`)
  } else {
    console.log(`data ${main.dataCmdDelete.nama} tidak ditemukan`)
  }
}
module.exports = {penambahData,filterData,dataDariJson,hapusData}


