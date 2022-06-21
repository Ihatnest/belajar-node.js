const express = require('express')
const app = express()
const {cekdatajson, findContact} = require('./utils/contact')
const port = 3000
// const data = [
//   {
//     nama: 'Budi',
//     nomorhp: '08547534745'
//   },
//   {
//     nama: 'sapi',
//     nomorhp: '08538538554'
//   },
//   {
//     nama: 'kambing',
//     nomrhp: '084245358453'
//   }
// ]

app.set('view engine', 'ejs')

app.use(express.static('public'))


app.get('/', (req, res) => {
  res.render('home', { title: 'Home' })
})

app.get('/contact', (req, res) => {
  let data = cekdatajson()
  res.render('contact', {
    title: 'Contact',
    data
  })
})

app.get('/contact/:nama', (req, res) => {
  let find = findContact(req.params.nama)
  let test = req.params.nama
  res.render('about', {
    title: 'About',
    find,
    test
  })
})


app.get('/about', function (req, res) {
  res.render('about', { title: 'about' })
});

app.get('/pengguman', function (req, res) {
  res.render('pengguman', { title: 'pengguman' })
});

app.use('/', (req, res) => {
  res.status(404)
  res.send('404 not found')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
