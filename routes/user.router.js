const {Router} = require('express')

const {userController} = require("../controllers");
const {newUserValidator, checkIsEmailDuplicate, checkIsUserPresent} = require('../middlewares/user.middlewares')


const userRouter = Router()

userRouter.get('/', userController.getAllUsers)
userRouter.post('/', newUserValidator, checkIsEmailDuplicate, userController.createUser)

// userRouter.get('/:userIndex', checkIsUserPresent, getUserById)
// userRouter.delete('/:userIndex', checkIsUserPresent, getUserById)
// userRouter.patch('/:userIndex', checkIsUserPresent, getUserById)

userRouter.all('/:userIndex', checkIsUserPresent)
userRouter.get('/:userIndex', userController.getUserById)
userRouter.delete('/:userIndex', userController.getUserById)
userRouter.patch('/:userIndex', userController.getUserById)

module.exports = userRouter
