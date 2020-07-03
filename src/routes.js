const express = require('express')

const routes = express.Router()

const controllers = require('./app/controllers')

routes.post('/signup', controllers.UserController.store)

module.exports = routes
