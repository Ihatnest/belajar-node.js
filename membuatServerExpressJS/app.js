const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/home', (req, res) => {
  res.send('home')
})

app.get('/route1',function(req,res){
  res.sendFile('./about.html', {root: __dirname})
});

// user/10/jalan/20?test=sapi
app.get('/user/:id/jalan/:id', (req, res) => {
  res.send(`user ${req.params.id} <br> jalan ${req.params.id} <br> test ${req.query.test} `)
})
// biasa nya palin bawah untuk ketika kita memasuko=i url yang salah maka yanga dibaha ini akan aktif
app.use('/', (req, res) => {
  res.send(`tidak ada halaman ${res}`)
})

// ini untuk menjalankannya
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})










// const { resolve } = require('dns');
// const fs = require('fs');
// const http = require('http')
// // jadi ini adalah server sederhana 

// const uu = (url,res) => {
//   fs.readFile(url,  (err, data) => {
//     if(err){
//       res.writeHead(404)
//       res.write('no fund')
//     } else {
//       res.write(data)
//     }
//     res.end()
//   })
// }
// http
//   .createServer((req, res) => {
//     res.writeHead(200, {
//       'Content-Type' : 'text/html'
//     });
//     const url = req.url
//     // menggunakan switch 
//     switch (url){
//       case '/about':
//         uu('./about.html', res);
//         break;
//       default:
//         res.write('gfgfgf')
//         res.end()
//         break;
//     }


//     // menggunakan if else 
//     // // jadi ini jika url about
//     // if (url === '/about'){
//     //   uu('./about.html',res)
//     // // jadi jika tidak mengunakan url
//     // } else{
//     //   res.write('gfgfgf')
//     //   res.end()
//     // }
    
//   })
//   .listen(3000, () => {
//     console.log('server berjalan')
//   });