import { app } from '../index';
import supertest from 'supertest';
const request = supertest(app);
import { auth_token } from './A-userRoutes_spec';
describe('dashboard ( get / ) without token(6)', () => {
    it(' should reject no token', async () => {
        const response = await request.get('/dashboard/userOrders/1');
        expect(response.status).toBe(401);
    });
    it(' should reject no token', async () => {
        const response = await request.get('/dashboard/completeduserOrders/1');
        expect(response.status).toBe(401);
    });
});
describe('dashboard ( get / ) with token(6)', () => {
    it(' should get the user1 Orders', async () => {
        const response = await request
            .get('/dashboard/userOrders/1')
            .set('Authorization', auth_token);
        expect(response.status).toBe(200);
    });
    it(' should get the user1 completed Orders', async () => {
        const response = await request
            .get('/dashboard/completeduserOrders/1')
            .set('Authorization', auth_token);
        expect(response.status).toBe(200);
    });
});
