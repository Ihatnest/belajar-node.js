const express = require('express')
const app = express()
const port = 3000
const data = [
  {
    name: 'Budi',
    age: '20'
  },
  {
    name: 'sapi',
    age: '2'
  },
  {
    name: 'kambing',  
    age: '3'  
  }
]


app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('home', {title: 'Home'})
})
app.get('/data', (req, res) => {
  res.render('data', {
    title: 'data',
    data
})
  
})
app.get('/about',function(req,res){
  res.render('about', {title: 'about'})
});
app.get('/pengguman',function(req,res){
  res.render('pengguman', {title: 'pengguman'})
});
app.use('/', (req, res) => {
})

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