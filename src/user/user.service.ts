import { Request, Response } from "express";

export class UserService {
    constructor() {}

    async createUser(req: Request, res: Response) {
    return res.send({}).status(201);
    }

    async getUsers(req: Request, res: Response) {
          return res.send([]).status(200);
    }
}