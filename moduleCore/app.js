

// const fs = require('fs');
// Asynchronous
// fs.mkdir('naga', e => console.log(e))
// fs.writeFile('./naga/naga.txt', 'hai', e => console.log(e)  )
// fs.readFile('./naga/naga.txt', 'utf8', (e, data) => console.log(data)  )

// Synchronous
// try{
//   fs.mkdirSync('sapi')
//   fs.writeFileSync('./sapi/sapi.txt', 'hai'  )
// }catch(e){
//   console.log(e)
// }
// let data = fs.readFileSync('./sapi/sapi.txt', 'utf8')
// console.log(data)


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('siapa nama kamu? ', (nama) => {
  rl.question('umur kamu berapa? ', (umur) => {
    console.log(`hai ${nama}, oo umur kamu ${umur} tahun ya`);
    rl.close();
  });
});