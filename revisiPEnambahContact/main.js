const yargs = require('yargs');
const {penambahData} = require('./fungsi');
const {isEmail,isMobilePhone} = require('validator');
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
    const dataContact = {
      nama: argv.nama,
      nohp: isMobilePhone(argv.nohp, 'id-ID')? argv.nohp : 'nomor hp tidak valid',
      email: isEmail(argv.email) ? argv.email : 'email tidak valid'
    }
    module.exports.datacmd = dataContact;
    penambahData()
  }
})

yargs.parse()