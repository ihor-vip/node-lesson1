const {Router} = require('express')

const {
    createUser,
    getAllUsers,
    getUserById
} = require("../controllers/user.controller");
const {checkIsEmailDuplicate} = require('../middlewares/user.middlewares')


const userRouter = Router()

userRouter.get('/', getAllUsers)

userRouter.post('/',checkIsEmailDuplicate, createUser)

userRouter.get('/:userIndex', getUserById)

module.exports = userRouter