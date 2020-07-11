const HourHistory = require('../models/HourHistory')
const getUserByToken = require('../services/getUserByToken')

class HourController {
	async index(req,res){
		const { id } = await getUserByToken(req)
		console.log(id)
		const hoursHistory = await HourHistory.aggregate([
			//{$match: { user_id: id}},
			{$group: {_id: null, minutes: {$sum: "$minutes"}}}
		])

		return res.status(200).send(hoursHistory)
	}

	async store(req, res) {
		const { id } = await getUserByToken(req)
		const { minutes } = req.body

		const increaseMinutes = await HourHistory.create({user_id: id, minutes})

		return res.status(201).json(increaseMinutes)
	}
}

module.exports = new HourController()
