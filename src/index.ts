import express, { Express, Request, Response } from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import { Router as userRouter } from './user/user.router';

dotenv.config();

const app: Express = express();

app.use(cors()).use(express.json()).options('*', cors());

app.use('/users', userRouter);

const port = process.env.PORT || 3111;
app.listen(port, async () => {
    await bootstrap();
});

async function bootstrap() {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log(`[server]: Server is running at http://localhost:${port}`);
    } catch (e) {
        throw new Error(e);
    }
}
