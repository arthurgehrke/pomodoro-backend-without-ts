require('dotenv').config()
const jwt = require('jsonwebtoken')
const { promisify } = require('util')
const User = require('../models/User')

module.exports = async(req) => {
  const authHeader = req.headers.authorization
  const [, token] = authHeader.split(' ')

  try {
    const decodedToken = await promisify(jwt.verify)(token, process.env.SECRET)
 
    const userData = await User.findOne(decodedToken.id)

    return userData
  } catch (err) {
    throw Error(err.message)
  }
}
