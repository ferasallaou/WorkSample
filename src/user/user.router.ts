import express from 'express'
import { UserService } from './user.service'
import { validateUser } from './dto'

export const Router = express.Router()
const userService = new UserService()

Router.get('/', userService.getUsers)
Router.post('/', validateUser,userService.createUser)
