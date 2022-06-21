const express = require('express')
const app = express()
const { cekdatajson, findContact,penambahData,hapusData } = require('./utils/contact')
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
app.use(express.urlencoded())


app.post('/contact', (req, res) => {
  penambahData(req.body)
  let data = cekdatajson()
  res.render('contact', {
    title: 'Contact',
    data
  })
})

app.get('/', (req, res) => {
  let data = cekdatajson()
  res.render('contact', {
    title: 'Contact',
    data
  })
})


app.get('/contact', (req, res) => {
  let data = cekdatajson()
  res.render('contact', {
    title: 'Contact',
    data
  })
})
app.get('/contact/add', function (req, res) {
  res.render('add', {
    title: 'Add Contact'
  })
});

app.get('/contact/:nama', (req, res) => {
  let find = findContact(req.params.nama)
  let test = req.params.nama
  res.render('about', {
    title: 'About',
    find,
    test
  })
})
app.get('/hapus/:nama', (req, res) => {
  hapusData(req.params.nama)
  res.render('hapus', {
    title: 'hapus',
  })
})





app.use('/', (req, res) => {
  res.status(404)
  res.send('404 not found')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
