require('dotenv').config()
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true
	},
	password: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
})

UserSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		return next()
	}

	this.password = await bcrypt.hash(this.password, 8)
})

UserSchema.methods = {
	compareHash(password) {
		return bcrypt.compare(password, this.password)
	}
}

UserSchema.statics = {
	generateToken({ email }) {
		return jwt.sign({ email }, process.env.SECRET, {
			expiresIn: process.env.EXPIRES_IN
		})
	}
}

module.exports = mongoose.model('User', UserSchema)
