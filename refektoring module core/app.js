const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// mengecekk apakah aada folder yang di tuju ada atau tidak
if (!fs.existsSync('naga/data.json')){
  fs.writeFileSync('naga/data.json', '[]');
}

rl.question('siapa nama kamu? ', nama => {
  rl.question('masukan nomor hp kamu? ', nohp => {
    let dataContact = {nama,nohp}
    let data = fs.readFileSync('naga/data.json', 'utf8')
    let dataJson = JSON.parse(data)
    dataJson.push(dataContact)
    fs.writeFileSync('naga/data.json', JSON.stringify(dataJson))
    console.log(`data ${nama} berhasil ditambahkan`)
    rl.close();
  });
});
