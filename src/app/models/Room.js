const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const RoomSchema = new mongoose.Schema({
  room_id: {
    type: Number,
    default: 0
  },
  owner_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  room_password: {
    type: String
  },
  members: {
    type: Array,
    ref: 'User'
  },
  createdAt: {
		type: Date,
		deafult: Date.now
	}
})

RoomSchema.plugin(AutoIncrement, {inc_field: 'room_id'})

module.exports = mongoose.model('Room', RoomSchema)
