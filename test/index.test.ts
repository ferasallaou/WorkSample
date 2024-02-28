import { describe, expect, it, beforeEach, afterAll } from '@jest/globals';
import request from 'supertest';
import app from '../src';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

beforeEach(async () => {
    await mongoose.connect(process.env.DB_URL);
});

afterAll((done) => {
    request(app)
        .delete('/users')
        .then(() => mongoose.connection.close());
    done();
});

describe('Getting Users from DB', () => {
    it('should return an object with success & data', async () => {
        const res = await request(app).get('/users');
        expect(res.statusCode).toBe(200);
        expect(res.body.success).toBeTruthy();
        expect(Array.isArray(res.body.data)).toBeTruthy();
        expect(res.body.data.length).toBeGreaterThanOrEqual(0);
    });
});

describe('Creating new User', () => {
    it('should fail when sending a missing payload', async () => {
        const res = await request(app)
            .post('/users')
            .send({ firstName: 'Test1', password: '123123' });
        expect(res.statusCode).toBe(400);
        expect(res.body.success).toBeFalsy();
    });

    it('should fail when email is invalid', async () => {
        const res = await request(app).post('/users').send({
            firstName: 'Test1',
            lastName: 'Test lastname',
            password: 'asdasdasd123',
            email: 'normalString@',
            age: 30,
        });
        expect(res.statusCode).toBe(400);
        expect(res.body.success).toBeFalsy();
        expect(res.body.error.includes('email')).toBeTruthy();
    });

    it('should fail when age is invalid', async () => {
        const res = await request(app).post('/users').send({
            firstName: 'Test1',
            lastName: 'Test lastname',
            password: 'asdasdasd123',
            email: 'normalString@email.com',
            age: 'asd',
        });
        expect(res.statusCode).toBe(400);
        expect(res.body.success).toBeFalsy();
        expect(res.body.error.includes('age')).toBeTruthy();
    });

    it('should create a user when payload is valid', async () => {
        const password = 'asdasdasd123';
        const res = await request(app).post('/users').send({
            firstName: 'Test1',
            lastName: 'Test lastname',
            password: password,
            email: 'normalString@email.com',
            age: 30,
        });

        expect(res.statusCode).toBe(201);
        expect(res.body.success).toBeTruthy();
        expect(res.body.data).toBeDefined();
        expect(res.body.data.password).not.toStrictEqual(password);
    });

    it('should fail when email is not unique', async () => {
        const res = await request(app).post('/users').send({
            firstName: 'Test1',
            lastName: 'Test lastname',
            password: 'asdasdasd123',
            email: 'normalString@email.com',
            age: 30,
        });
        expect(res.statusCode).toBe(500);
        expect(res.body.success).toBeFalsy();
        expect(res.body.error).toBe('Email is already used!');
    });
});
