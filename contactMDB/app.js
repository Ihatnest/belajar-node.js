require('./utils/monggos')
const express = require('express')
const app = express()
const { check, validationResult, isMobilePhone, isEmail, body } = require('express-validator');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const session = require('express-session')
const {secema} = require('./scema/scema')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/data');
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
  body('nama').custom(async value => {
      let dataJson = await secema.findOne({nama: value})
      if (dataJson){
        throw new Error(`Nama ${dataJson.nama} sudah ada`)
      }
      return true
  }),
  

  check('nomorhp', 'Nomor Hp tidak valid').isMobilePhone('id-ID'),
  check('email', 'Email tidak valid').isEmail(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render('add', {
        title: 'Contact',
        errors: errors.array()
      })
    } else {
      let data = new secema(
        {
          // oldNama: req.body.naam,
          nama: req.body.nama,
          nomorhp: req.body.nomorhp,
          email: req.body.email,
        }
        )
      await data.save(req.body)
      req.flash('msg', 'Data Berhasil Ditambahkan')
      res.redirect('/')
    }
  }
)

// post buat validasi nama, nomor hp dan email (penutup)


// untuk keberanda contact
app.get('/', async (req, res) => {
  let data = await secema.find()
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
    title: 'Add Contact',
  })
});
// untuk ke beranda penambahan contact (penutup)

// untuk mengatahui detai pada nomor
app.get('/contact/:nama', async (req, res) => {
  let find = await secema.findOne({nama: req.params.nama})
  let test = req.params.nama
  res.render('about', {
    title: 'About',
    find,
    test
  })
})
// untuk mengatahui detai pada nomor (penutup)

// untuk mengapus contact
app.get('/hapus/:nama', async (req, res) => {
  await secema.deleteOne({nama: req.params.nama})
  req.flash('msgDelete', 'Data Berhasil Dihapus')
  res.redirect('/')
})
// untuk mengapus contact (penutup)

// untuk mengedit contact
app.post('/edit/:nama',
body('nama').custom(async (value, {req}) => {
  const dataJson = await secema.findOne({nama: value})
  // const dup = await cekdupNama(value)
  console.log(value)
  console.log(dataJson)
  console.log(req.body.oldNama)
  // if ((value === dataJson) && (value !== req.body.nama)){
  if (value !== req.body.oldNama && dataJson){
    throw new Error(`Nama ${value} sudah ada`)
  }
  return true
}),
  check('nomorhp', 'Nomor Hp tidak valid').isMobilePhone('id-ID'),
  check('email', 'Email tidak valid').isEmail(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      let find = await secema.findOne({nama: req.params.nama})
      res.render('edit', {
        title: 'Edit',
        find,
        errors: errors.array()
      })
    } else {
      let find = await secema.findOne({nama: req.params.nama})
      await secema.updateOne(
        {_id: find._id},
        {
          $set: {
            oldNama: req.body.nama,
            nama: req.body.nama,
            nomorhp: req.body.nomorhp,
            email: req.body.email,
          },
        }
        )
      req.flash('msg', 'Data sudah di edit')
      res.redirect('/')
    }
  }
)

app.get('/edit/:nama',async (req, res) => {
  let find = await secema.findOne({nama: req.params.nama})
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
