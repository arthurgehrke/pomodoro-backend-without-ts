require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

class App {
	constructor() {
		this.express = express()

		this.database()
		this.middlewares()
		this.routes()
	}

	database() {
		mongoose.connect(process.env.URI, {
			useCreateIndex: true,
			useNewUrlParser: true
		})
	}

	middlewares() {
		this.express.use(express.json())
		this.express.use(cors())
	}

	routes() {
		this.express.use(require('./routes'))
	}
}

module.exports = new App().express
