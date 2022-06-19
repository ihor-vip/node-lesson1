const {Router} = require('express')
const {getReports} = require('../controllers/report.controller')

const reportRouter = Router()

reportRouter.get('/', getReports)

module.exports = reportRouter;