import { app } from '../index';
import supertest from 'supertest';
import { User } from '../models/user';
const request = supertest(app);
describe('user ( get / )', () => {
it(' should return 401 status', async () => {
    const response = await request.get('/users/index');
    expect(response.status).toBe(401);
});
it(' should return 401 status', async () => {
    const response = await request.get('/users/show/1');
    expect(response.status).toBe(401);
});
describe('user ( POST / )', () => {
    const test_user : User={
        first_name:'mohamed',
        last_name:'ahmed',
        password: '123'
    }
it(' should return 200 status', async () => {
    const response= await request.post('/users/create').send(test_user);
    expect(response.status).toBe(200);
});
});
});
