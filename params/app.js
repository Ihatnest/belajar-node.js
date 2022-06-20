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
app.all('/about',function(req,res){
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


