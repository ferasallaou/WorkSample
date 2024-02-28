import { Request, Response } from 'express';
import { insertUser, listUsers, deleteTestUsers } from './user.repository';

export async function createUser(req: Request, res: Response) {
    const saveUser = await insertUser(req.body);
    return res.status(!saveUser.success ? 500 : 201).send(saveUser);
}

export async function getUsers(req: Request, res: Response) {
    const { created: orderByCreated } = req.query;
    const users = await listUsers(orderByCreated as any);
    return res.status(users.success ? 200 : 500).send(users);
}

export async function deleteUsers(req: Request, res: Response) {
    const deleteUsers = await deleteTestUsers();
    return res.status(deleteUsers.success ? 200 : 500).send(deleteUsers);
}
