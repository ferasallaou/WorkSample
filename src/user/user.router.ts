import express from 'express'
import { createUser, getUsers } from './user.service'
import { validateUser } from './dto'
import {query} from 'express-validator'

export const Router = express.Router()


Router.get('/', query('created').default('desc') ,getUsers)
Router.post('/', validateUser, createUser)
