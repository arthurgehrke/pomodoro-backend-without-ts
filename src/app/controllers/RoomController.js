const Room = require('../models/Room')
const getUserByToken = require('../services/getUserByToken')

class RoomController{
  async index(req,res){
    const rooms = await Room.find()

    return res.status(200).send(rooms)
  }

  async store(req,res){
    const user = await getUserByToken(req)
    const { room_password } = req.body

    const room = await Room.create({ owner_id: user.id, room_password})
    
    return res.status(201).send(room)
  }
}

module.exports = new RoomController()
