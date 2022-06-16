const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//  pertama ini kita ambil imput dari user
rl.question('siapa nama kamu? ', (nama) => {
  rl.question('masukan nomor hp kamu? ', (nohp) => {
    // lalu kita tampung data dari mput user di datacontact
    let dataContact = {nama,nohp}
    //disini kita ambil isi dari file sapi.json
    let data = fs.readFileSync('sapi.json', 'utf8')
    // lalu kita parse data dari file sapi.json
    let dataJson = JSON.parse(data)
    // lalu disini kita abmil dataJson dan kita push dataContact ke dalam dataJson
    dataJson.push(dataContact)
    // disini kita ubah lagi data json menjadi string
    fs.writeFileSync('sapi.json', JSON.stringify(dataJson))

    rl.close();
  });
});


