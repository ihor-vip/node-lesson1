const express = require('express')
const {engine} = require('express-handlebars')
const mongoose = require('mongoose')

const {PORT} = require('./config/config')
const userRouter = require('./routes/user.router')
const reportRouter = require('./routes/report.router')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.engine('.hbs', engine({defaultLayout: false}));
app.set('view engine', '.hbs');
app.set('views', './static');

mongoose.connect('mongodb://localhost:27017/hebron').then(() => {
    console.log('Connection success')
})

app.use('/users', userRouter)
app.use('/reports', reportRouter)

app.use('*', (err,req,res,next) => {

})


app.listen(PORT, () => {
    console.log(`App listen port ${PORT}`)
})




