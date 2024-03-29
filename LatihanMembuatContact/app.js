const express = require('express')
const app = express()
const port = 3000
let ejs = require('ejs');
let data = [
  {
    nama: 'sapi',
    nomorhp: 085266473432
  },
  {
    nama: 'sapu',
    nomorhp: 085266473432
  },
  {
    nama: 'sapi',
    nomorhp: 085266473432
  },
  {
    nama: 'sapi',
    nomorhp: 085266473432
  }

]

app.set('view engine', 'ejs')


app.get('/', (req, res) => {
  res.render('contact', {
    title: 'Contact',
    data
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    data
  })
})

app.get('/add', (req, res) => {
  res.render('add', {
    title: 'Add Contact',
    data
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})