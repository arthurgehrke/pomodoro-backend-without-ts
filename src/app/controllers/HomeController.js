const Room = require('../models/Room')
const HourHistory = require('../models/HourHistory')
const getUserByToken = require('../services/getUserByToken')

class HomeController{
  async show(req,res){
    const rooms = await Room.find()

    const user = await getUserByToken(req)

    return res.status(200).json({user, rooms})
  }
}

module.exports = new HomeController()
