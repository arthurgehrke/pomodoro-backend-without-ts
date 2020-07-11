const express = require('express')

const routes = express.Router()

const controllers = require('./app/controllers')

routes.post('/signup', controllers.SignUpController.store)
routes.post('/signin', controllers.SignInController.store)

routes.get('/room', controllers.RoomController.index)
routes.post('/room', controllers.RoomController.store)

routes.get('/hour', controllers.HourController.index)
routes.post('/hour', controllers.HourController.store)

routes.get('/home', controllers.HomeController.show)

module.exports = routes
