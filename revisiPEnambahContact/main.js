const yargs = require('yargs');
const {penambahData,filterData} = require('./fungsi');
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

yargs.parse()