const {Router} = require('express')

const {
    createUser,
    getAllUsers,
    getUserById
} = require("../controllers/user.controller");

const userRouter = Router()

userRouter.get('/', getAllUsers)

userRouter.post('/', createUser)

userRouter.get('/:userIndex', getUserById)

module.exports = userRouter