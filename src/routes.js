const express = require('express')

const routes = express.Router()

const controllers = require('./app/controllers')

routes.post('/signup', controllers.SignUpController.store)
routes.post('/signin', controllers.SignInController.store)

routes.post('/room', controllers.RoomController.store)

module.exports = routes
