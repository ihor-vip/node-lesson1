const {Schema, model} = require('mongoose')
const {userRolesEnum} = require('../constants')

const User = new Schema({
  name: {type: String, trim: true},
  email: {type: String, trim: true, lowercase: true, unique: true, required: true},
  age: {type: Number, default: 18},
  role: {type: String, enum: Object.values(userRolesEnum), default: userRolesEnum.USER},
  password: {type: String, required: true, default: null, select: false}
}, {timestamps: true})

module.exports = model('User', User)
