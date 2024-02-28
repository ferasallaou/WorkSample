import express from 'express';
import { query } from 'express-validator';
import { createUser, getUsers, deleteUsers } from './user.service';
import { validateUser } from './dto';

export const Router = express.Router();

/**
 * Route to get users.
 * @route GET /
 * @param {string} [created=desc] - Optional query parameter for sorting users by creation date.
 * @group Users - Operations related to user management
 * @returns {Array<User>} 200 - An array of user objects.
 * @produces application/json
 * @consumes application/json
 */
Router.get('/', query('created').default('desc'), getUsers);

/**
 * Route to create a new user.
 * @route POST /
 * @group Users - Operations related to user management
 * @param {object} request.body.required - The user object to create.
 * @param {string} request.body.firstName.required - First name of the user.
 * @param {string} request.body.lastName.required - Last name of the user.
 * @param {string} request.body.email.required - Email address of the user, should be unique.
 * @param {string} request.body.password.required - Password of the user (at least 8 characters).
 * @param {number} request.body.age.required - Age of the user.
 * @returns {User} 201 - The created user object.
 * @throws {400} Bad request - Invalid user data.
 * @produces application/json
 * @consumes application/json
 */
Router.post('/', validateUser, createUser);

/**
 * Route to delete all users.
 * @route DELETE /
 * @group Users - Operations related to user management
 * @returns {string} 200 - No content.
 * @produces application/json
 * @consumes application/json
 */
Router.delete('/', deleteUsers);
