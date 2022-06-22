const express = require('express')
const {engine} = require('express-handlebars')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const {PORT, MONGO_URL} = require('./config/config')
const {reportRouter,userRouter} = require('./routes')
const ApiError = require('./error/ApiError')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.engine('.hbs', engine({defaultLayout: false}));
app.set('view engine', '.hbs');
app.set('views', './static');

mongoose.connect(MONGO_URL).then(() => {
  console.log('Connection success')
})

app.use('/reports', reportRouter)
app.use('/users', userRouter)
app.use('*', _notFoundHandler)
app.use(_mainErrorHandler)

function _notFoundHandler(req, res, next) {
  next (new ApiError('Not Found', 404))
}

function _mainErrorHandler(err,req,res) {
  res
    .status(err.status || 500)
    .json({
      message: err.message || 'Server error',
      status: err.status
    })
}

app.listen(PORT, () => {
  console.log(`App listen port ${PORT}`)
})


