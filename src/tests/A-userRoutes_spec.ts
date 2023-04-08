import { app } from '../index';
import supertest from 'supertest';
import { User } from '../models/user';
const request = supertest(app);
let auth_token : string 
describe('user ( get / ) without token (2)', () => {
it(' should reject no token', async () => {
    const response = await request.get('/users/index');
    expect(response.status).toBe(401);
});
it(' should reject no token', async () => {
    const response = await request.get('/users/show/1');
    expect(response.status).toBe(401);
});
});
describe('user ( POST / ) (2)', () => {
    const test_user: User = {
        first_name: 'mohamed',
        last_name: 'ahmed',
        password: '123',
    };
    it(' should create user', async () => {
        const response = await request.post('/users/create').send(test_user);
        auth_token = response.headers.authorization as string;
        // console.log(auth_token);
        expect(response.status).toBe(200);
    });
});
describe('user ( get / ) with token (2)', () => {
    it(' should return all users', async () => {
        const response = await request
            .get('/users/index')
            .set('Authorization', auth_token);
        expect(response.status).toBe(200);
    });
    it(' should return user1', async () => {
        const response = await request
            .get('/users/show/1')
            .set('Authorization', auth_token);
        expect(response.status).toBe(200);
    });
});
export{
    auth_token
}