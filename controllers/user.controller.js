const DB = require("../dataBase/users");

module.exports = {
    getAllUsers: (req, res) => {
        try {
            res.json(DB)
        } catch (e) {
            res.json(e)
        }
    },

    createUser: (req, res) => {
        try {
            DB.push(req.body)
            res.json(DB)
        } catch (e) {
            res.json(e)
        }
    },

    getUserById: (req, res) => {
        try {
            const {userIndex} = req.params
            const user = DB[userIndex]

            if (!user) {
                throw new Error('Not found')
            }

            res.json(user)
        } catch (e) {
            res.json(e)
        }

    }
}