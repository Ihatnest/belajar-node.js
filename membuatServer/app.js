const { resolve } = require('dns');
const fs = require('fs');
const http = require('http')
// jadi ini adalah server sederhana 

const uu = (url,res) => {
  fs.readFile(url,  (err, data) => {
    if(err){
      res.writeHead(404)
      res.write('no fund')
    } else {
      res.write(data)
    }
    res.end()
  })
}
http
  .createServer((req, res) => {
    res.writeHead(200, {
      'Content-Type' : 'text/html'
    });
    const url = req.url
    // menggunakan switch 
    switch (url){
      case '/about':
        uu('./about.html', res);
        break;
      default:
        res.write('gfgfgf')
        res.end()
        break;
    }


    // menggunakan if else 
    // // jadi ini jika url about
    // if (url === '/about'){
    //   uu('./about.html',res)
    // // jadi jika tidak mengunakan url
    // } else{
    //   res.write('gfgfgf')
    //   res.end()
    // }
    
  })
  .listen(3000, () => {
    console.log('server berjalan')
  });