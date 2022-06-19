const express = require('express')
const {engine} = require('express-handlebars')
const DB = require('./dataBase/users')

const app = express()

app.engine('.hbs', engine({defaultLayout: false}));
app.set('view engine', '.hbs');
app.set('views', './static');

app.get('/', (req, res) => {
    // console.log(req)

    res.json('hello world')
})

app.get('/users', (req,res) => {
    // res.send('users')
    // res.sendStatus(200)
    res
        .status(404)
        // .json({
        //     error: 'users not found'})
        .json(DB)
})

// app.get('/users/2', (req,res) => {
//     res.json(DB[2])
// })

app.get('/users/:userIndex', (req,res) => {
    console.log(req.params)
    const {userIndex} = req.params

    res.json(DB[userIndex] || {})
})

app.get('/page', (req,res) => {
  //   res.write(
  // `<div style='background-color: cornflowerblue'>hello</div>`
  //   )
  //   res.end()
    res.render('welcome',{userName: 'john', userAge: 32})
})

app.listen(5000, ()=>{
    console.log('App listen 5000')
})




