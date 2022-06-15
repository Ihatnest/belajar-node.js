//  ada tiga require()

// cara 1
// const fs = require('fs'); // core module
// cara 2
// const data = require('./script.js'); // local module
// cara 3
// const moment = require('moment'); // third-party module / npm module / node module


const data = require('./script.js');

console.log(`hai nama saya ${data.nama} dan kelas saya ${data.kelas} ini teman saya nama nya ${data.hallo('saya',12)}`);