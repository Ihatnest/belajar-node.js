
const fungsi = require('./fungsi');

fungsi.cek()
// untuk menapabhakan pertanyaan
const main = async () => {
  // petanyaan pertanyaa
  const nama = await fungsi.pertanyaan('masukan nama kamu? ');
  const umur = await fungsi.pertanyaan('masukan umur kamu? ');
  const email = await fungsi.pertanyaan('masukan email kamu? ');
  // untuk exports ke fungsi untuk menambah data
  module.exports.dataPertanyaan = {nama, umur, email};
  // fungsi untuk menambah data
  fungsi.penambahData()
  // untuk menutup program
  fungsi.rl.close();
}
main();