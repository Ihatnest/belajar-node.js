const express = require('express')
const app = express()
const { check, validationResult, isMobilePhone, isEmail, body } = require('express-validator');
const { cekdatajson, findContact, penambahData, hapusData, cekdup, updateEdit } = require('./utils/contact')
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const session = require('express-session')
const port = 3000
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded())
app.use(cookieParser('secret'));
app.use(session({
  cookie: { maxAge: 60000 },
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
app.use(flash());

// app.get('/contact', (req, res) => {
//   let data = cekdatajson()
//   res.render('contact', {
//     title: 'Contact',
//     data,
//     msg: req.flash('msg'),
//   })
// })

// post buat validasi nama, nomor hp dan email

app.post('/',
  body('nama').custom(value => {
    cekdup(value)
    return true
  }),
  check('nomorhp', 'Nomor Hp tidak valid').isMobilePhone('id-ID'),
  check('email', 'Email tidak valid').isEmail(),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // return res.status(400).json({ errors: errors.array() });
      res.render('add', {
        title: 'Contact',
        errors: errors.array()
      })
    } else {
      penambahData(req.body)
      req.flash('msg', 'Data Berhasil Ditambahkan')
      res.redirect('/')
    }
  }
)

// untuk ke beranda penambahan contact
app.get('/contact/add', function (req, res) {
  res.render('add', {
    title: 'Add Contact'
  })
});

// untuk keberanda contact
app.get('/', (req, res) => {
  let data = cekdatajson()
  res.render('contact', {
    title: 'Contact',
    data,
    msg: req.flash('msg'),
    msgDelete: req.flash('msgDelete')
  })
})

// untuk mengatahui detai pada nomor
app.get('/contact/:nama', (req, res) => {
  let find = findContact(req.params.nama)
  let test = req.params.nama
  res.render('about', {
    title: 'About',
    find,
    test
  })
})
// untuk mengapus contact
app.get('/hapus/:nama', (req, res) => {
  hapusData(req.params.nama)
  req.flash('msgDelete', 'Data Berhasil Dihapus')
  res.redirect('/')
})




app.post('/contact/edit/',
  body('nama').custom(value => {
    cekdup(value)
    return true
  }),
  check('nomorhp', 'Nomor Hp tidak valid').isMobilePhone('id-ID'),
  check('email', 'Email tidak valid').isEmail(),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // return res.status(400).json({ errors: errors.array() });
      res.render('edit', {
        title: 'edit',
        errors: errors.array()
      })
    } else {
      updateEdit(req.body)
      const u = updateEdit(req.body)
      console.log(u)
      req.flash('msg', 'Data Berhasil Ditambahkan')
      res.redirect('/')
    }
  }
)
app.get('/contact/edit/:nama', (req, res) => {
  let find = findContact(req.params.nama)
  res.render('edit', {
    title: 'Edit',
    find,
    msg: req.flash('msg'),
    msgDelete: req.flash('msgDelete')
  })
})

// app.post('/contact/edit/:nama', (req, res) => {
//   updateEdit(req.body)
//   req.flash('msg', 'Data Berhasil Ditambahkan')
//   res.redirect('/')
// })




// midelware untuk ketika user memasukan link salah
app.use('/', (req, res) => {
  res.status(404)
  res.send('404 not found')
})

// untuk menjalankan itu semua
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
