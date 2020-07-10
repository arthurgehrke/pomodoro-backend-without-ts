const moongose = require('mongoose')

const RoomSchema = new moongose.Schema({
  room_id: {
    type: Number,
    required: true,
    auto: true
  },
  owner_id: {
    type: moongose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
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
