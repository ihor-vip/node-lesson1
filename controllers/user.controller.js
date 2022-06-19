const User = require("../dataBase/User.model");

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find()
            res.json(users)
        } catch (e) {
            res.json(e)
        }
    },

    createUser: async (req, res) => {
        try {
            const createdUser = await User.create(req.body)
            res.status(201).json(createdUser)
        } catch (e) {
            res.json(e)
        }
    },

    getUserById: async (req, res) => {
        try {
            const {userIndex} = req.params
            const user = await User.findById(userIndex)

            if (!user) {
                res.status(404).json(`User with id ${userIndex} not found`)
                return;
            }
            res.json(user)
        } catch (e) {
            res.json(e)
        }

    }
}