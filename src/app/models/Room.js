const moongose = require('mongoose')

const RoomSchema = new moongose.Schema({
  room_id: {
    type: Number,
    auto: true
  },
  owner_id: {
    type: moongose.Schema.Types.ObjectId,
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

module.exports = moongose.model('Room', RoomSchema)
