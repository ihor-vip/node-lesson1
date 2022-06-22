const {authService} = require('../services')

function checkAccessToken(req, res, next) {
  try{
    const token = 'ghjhgk'

    authService.validateToken(token)

    next()
  } catch (e) {
    next(e)
  }
}

function checkRefreshToken(req, res, next) {
  try{
    const token = 'rejfgfn'

    authService.validateToken(token, 'refresh')

    next()
  } catch (e) {
    next(e)
  }
}

module.exports = {
  checkAccessToken,
  checkRefreshToken
}
