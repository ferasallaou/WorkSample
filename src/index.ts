import express, { Express } from 'express';
import cors from 'cors';
import { Router as userRouter } from './user/user.router';

const app: Express = express();

app.use(cors()).use(express.json()).options('*', cors());

app.use('/users', userRouter);

export default app;
