const express = require('express')
const app = express()
const port = 3000

// Middleware - Plugin
app.use(express.urlencoded({extended: false}))

app.use((req, res, next)=> {
    console.log("hello from middle 1 ()={}");
    next()
})
app.use(function(req, res, next) {
    console.log("hello from middle 2 fn(){}");
    next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log("hello word");
  
})
app.get('/about', (req, res) => {
  res.send('About World!')
  console.log("about");
  
})

// routes parameter
app.get('/profile/:username', (req, res) => {
  res.send(`${req.params.username}!`)
  // console.log("ankit");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
