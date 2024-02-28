import express from 'express';
import { query } from 'express-validator';
import { createUser, getUsers, deleteUsers } from './user.service';
import { validateUser } from './dto';

export const Router = express.Router();

Router.get('/', query('created').default('desc'), getUsers);
Router.post('/', validateUser, createUser);
Router.delete('/', deleteUsers);
