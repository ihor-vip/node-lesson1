const User = require('../dataBase/User.model')
const ApiError = require('../error/ApiError')
const {CURRENT_YEAR} = require("../constants/constants");
const {userValidator} = require('../validators')
const {authService} = require("../services");

const checkIsEmailDuplicate = async (req, res, next) => {
  try{
    const {email, year} = req.body

    if (year < CURRENT_YEAR - 100 || year > CURRENT_YEAR) {
      next( new ApiError('Not valid year', 404))
      return
    }

    const isUserPresent = await User.findOne({email: email.toLowerCase().trim()})

    if (isUserPresent) {
      next(new ApiError('User with this email already exist', 409))
      return
    }
    next()
  } catch (e) {
    next(e)
  }
}

const checkIsUserPresent = async (req, res, next) => {
  try{
    const {userIndex} = req.params

    const userById = await User.findById(userIndex)

    if (!userById) {
      next( new ApiError('User not found', 404))
      return
    }
    req.user = userById

    next()
  } catch (e) {
    next(e)
  }
}

const newUserValidator = (req, res, next) => {
  try{
    const {error, value} = userValidator.newUserJoiSchema.validate(req.body)

    authService.validateToken('jhgjh')

    if (error) {
      next(new ApiError(error.details[0].message, 400))
      return
    }

    req.body = value

    next()
  } catch (e) {

  }
}

module.exports = {
  checkIsEmailDuplicate,
  checkIsUserPresent,
  newUserValidator
}
