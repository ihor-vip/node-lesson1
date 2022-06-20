const {Router} = require('express')

const {
  createUser,
  getAllUsers,
  getUserById
} = require("../controllers/user.controller");
const {checkIsEmailDuplicate, checkIsUserPresent} = require('../middlewares/user.middlewares')


const userRouter = Router()

userRouter.get('/', getAllUsers)
userRouter.post('/',checkIsEmailDuplicate, createUser)

// userRouter.get('/:userIndex', checkIsUserPresent, getUserById)
// userRouter.delete('/:userIndex', checkIsUserPresent, getUserById)
// userRouter.patch('/:userIndex', checkIsUserPresent, getUserById)

userRouter.all('/:userIndex', checkIsUserPresent)
userRouter.get('/:userIndex', getUserById)
userRouter.delete('/:userIndex', getUserById)
userRouter.patch('/:userIndex', getUserById)

module.exports = userRouter
