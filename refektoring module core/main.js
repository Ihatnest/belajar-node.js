
// ada 2 cara buat require() 
// 1. require() contoh fungsi.pertanyaan()
// const fungsi = require('./fungsi');
// 2. require() contoh pertanyaan()
const {pertanyaan, penambahData,} = require('./fungsi');

// untuk menapabhakan pertanyaan
const main = async () => {
  // petanyaan pertanyaa
  const nama = await pertanyaan('masukan nama kamu? ');
  const umur = await pertanyaan('masukan umur kamu? ');
  const email = await pertanyaan('masukan email kamu? ');
  // untuk exports ke fungsi untuk menambah data
  module.exports.dataPertanyaan = {nama, umur, email};
  // fungsi untuk menambah data
  penambahData()
}
main();