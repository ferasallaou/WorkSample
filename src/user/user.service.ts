import { Request, Response } from "express";
import {  insertUser, listUsers } from "./user.repository";


export async function createUser(req: Request, res: Response) {
    const saveUser = await insertUser(req.body)
    return res.status(!saveUser.success ? 500 : 201).send(saveUser)
    
}

export async function getUsers(req: Request, res: Response) {
        const {created: orderByCreated} = req.query
      return res.status(200).send(await listUsers(orderByCreated as any))
}