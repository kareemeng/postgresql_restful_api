import { app } from '../index';
import supertest from 'supertest';
const request = supertest(app);
describe('dashboard ( get / )', () => {
it(' should return 401 status', async () => {
    const response = await  request.get('/dashboard/userOrders/1');
    expect(response.status).toBe(401);
});
it(' should return 401 status', async () => {
    const response = await request.get('/dashboard/completeduserOrders/1');
    expect(response.status).toBe(401);
});
});
