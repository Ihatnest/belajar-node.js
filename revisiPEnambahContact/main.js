const yargs = require('yargs');
const {penambahData,filterData,dataDariJson,hapusData} = require('./fungsi');
const fs = require('fs');

yargs.command({
  command: 'add',
  describe: 'menambahkan data',
  builder: {
    nama: {
      describe: 'menambahkan nama',
      demandOption: true,
      type: 'string'
    },
    nohp: {
      describe: 'menambahkan nomor hp',
      demandOption: true,
      type: 'string'
    },
    email:{
      describe: 'menambahkan email',
      demandOption: false,
      type: 'string'
    }  
  },
  handler(argv) {
    module.exports.dataCmd= {
      nama: argv.nama,
      nohp: argv.nohp,
      email: argv.email
    };
    filterData()
  }
})

yargs.command({
  command: 'list',
  describe: 'menampilkan data',
  handler() {
    const dataJson = dataDariJson()
    console.log(dataJson)
  }
});

yargs.command({
  command: 'delete',
  describe: 'menghapus data',
  builder: {
    nama: {
      describe: 'menghapus nama',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    module.exports.dataCmdDelete= {
      nama: argv.nama
    };
    hapusData(argv.nama)
  }
});


yargs.parse()