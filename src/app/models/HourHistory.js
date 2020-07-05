const mongoose = require('mongoose')

const HourHistory = new mongoose.Schema({
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	minutes: {
		type: Number,
		required: true
	},
	createdAt: {
		type: Date,
		deafult: Date.now
	}
})

module.exports = mongoose.model('HourHistory', HourHistory)
