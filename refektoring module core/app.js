const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// mengecekk apakah aada folder yang di tuju ada atau tidak
if (!fs.existsSync('./naga/data.json', 'utf8')) {
  try {
    fs.mkdirSync('./naga', e => console.log(e))
    fs.writeFileSync('./naga/data.json', '[]')
  } catch (e) {
    console.log('folder sudah ada')
  }
}

// untuk membuat pertanyaan
const pertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, e => {
      resolve(e);
    })
  })
}
const eksekusi = async () => {
  // petanyaan pertanyaa
  const nama = await pertanyaan('masukan nama kamu? ');
  const umur = await pertanyaan('masukan umur kamu? ');
  const email = await pertanyaan('masukan email kamu? ');
  
  // menampung data dari pertanyaan
  let dataContact = {nama, umur, email}
  // mengambil isi dari file data.json
  let data = fs.readFileSync('./naga/data.json', 'utf8')
  // mengubah isi dari file data.json menjadi json
  let dataJson = JSON.parse(data)
  // menambahkan dataContact ke dalam dataJson
  dataJson.push(dataContact)
  // mengubah dataJson menjadi string
  fs.writeFileSync('./naga/data.json', JSON.stringify(dataJson))
  console.log(`data ${nama} berhasil ditambahkan`)

  rl.close();
}

eksekusi();



