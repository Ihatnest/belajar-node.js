const express = require('express')
const app = express()
const { check, validationResult, isMobilePhone, isEmail, body } = require('express-validator');
const { cekdatajson, findContact, penambahData, hapusData, cekdupNama, updateEdit, cekdupEmail } = require('./utils/contact')
const {cekdata} = require('./utils/datadb')
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



// post saat menambahkan contact buat validasi nama, nomor hp dan email
app.post('/',
  body('nama').custom(value => {
    cekdupNama(value)
    return true
  }),
  
  // body('email').custom(value => {
  //   let cek = cekdupEmail(value)
  //   let cuk = value.isEmail()
  //   if(cek === value){
  //     ce
  //   }
  //   return true
  // }),
  check('nomorhp', 'Nomor Hp tidak valid').isMobilePhone('id-ID'),
  check('email', 'Email tidak valid').isEmail(),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
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
// post buat validasi nama, nomor hp dan email (penutup)


// untuk keberanda contact
app.get('/', (req, res) => {
  let data = cekdata()
  // let cr = JSON.stringify(data)
  // let data = cekdatajson()
  console.log(data)
  res.render('contact', {
    title: 'Contact',
    data,
    msg: req.flash('msg'),
    msgDelete: req.flash('msgDelete')
  })
})
// untuk keberanda contact (penutup)

// untuk ke beranda penambahan contact
app.get('/contact/add', function (req, res) {
  res.render('add', {
    title: 'Add Contact'
  })
});
// untuk ke beranda penambahan contact (penutup)

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
// untuk mengatahui detai pada nomor (penutup)

// untuk mengapus contact
app.get('/hapus/:nama', (req, res) => {
  hapusData(req.params.nama)
  req.flash('msgDelete', 'Data Berhasil Dihapus')
  res.redirect('/')
})
// untuk mengapus contact (penutup)

// untuk mengedit contact
app.post('/edit/:nama',
  check('nomorhp', 'Nomor Hp tidak valid').isMobilePhone('id-ID'),
  check('email', 'Email tidak valid').isEmail(),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      let find = findContact(req.params.nama)
      res.render('edit', {
        title: 'Edit',
        find,
        errors: errors.array()
      })
    } else {
      updateEdit(req.body)
      req.flash('msg', 'Data sudah di edit')
      res.redirect('/')
    }
  }
)

app.get('/edit/:nama', (req, res) => {
  let find = findContact(req.params.nama)
  res.render('edit', {
    title: 'Edit',
    find,
  })
})
// untuk mengedit contact (penutup)


// midelware untuk ketika user memasukan link salah
app.use('/', (req, res) => {
  res.status(404)
  res.send('404 not found')
})

// untuk menjalankan itu semua
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
