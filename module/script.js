// ada tiga cara buat module exports menurut ku 

// cara 1
// module.exports.nama = 'sapi';
// module.exports.kelas = '12';
// module.exports.hallo = (nama,kelas) => `Hallo nama saya ${nama} kelas ${kelas}`;

// cara 2
// const nama = 'sapi';
// const kelas = '12';
// const hallo = (nama,kelas) => `Hallo nama saya ${nama} kelas ${kelas}`;
// module.exports.nama = nama;
// module.exports.kelas = kelas;
// module.exports.hallo = hallo;

// cara 3
// module.exports = {
//   nama : "script",
//   kelas : 120,
//   hallo : (nama, kelas) => `Hallo nama saya ${nama} kelas ${kelas}`
  
// }