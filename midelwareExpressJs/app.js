const express = require('express')
const router = express.Router()
const app = express()
const morgan = require('morgan')
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

// ada banyak macam midlware yang bisa digunakan
// Application-level middleware
// Router-level middleware
// Error-handling middleware
// Built-in middleware
// Third-party middleware

app.set('view engine', 'ejs')

// Application-level middleware
// inggat yak midelware itu dia akan membaca dari atas ke bawah
app.use((rea,res,next)=>{
  console.log('ini adalah middleware')
    next()  // ini adalah nextnya
  })

// jadi kan akn langsung melanjutkanke bawah jadi lewat situ dulu 
// kita bisa menambahkan middleware lainnya
// Third-party middleware
app.use(morgan('tiny'))
// Built-in middleware
// express.static 
// ini buat kita busa gunakan src apa pun itu di file img karna kalo pake ekpress itu tidak bisa mengambil src ini juaga termasuk midelware
app.use(express.static('public'))
//

app.get('/', (req, res) => {
  res.render('home', { title: 'Home' })
})

app.get('/data', (req, res) => {
  console.dir(req.originalUrl)
  res.render('data', {
    title: 'data',
    data
  })
})


app.get('/about', function (req, res) {
  res.render('about', { title: 'about' })
});

app.get('/pengguman', function (req, res) {
  res.render('pengguman', { title: 'pengguman' })
});

// jadi ini juga sebanar nya adalah salah satu midelware juga
app.use('/', (req, res) => {
  res.status(404)
  res.send('404 not found')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
