import { app } from '../index';
import supertest from 'supertest';
import {Product} from '../models/product'
const request = supertest(app);
describe('products ( get / )', () => {
it(' should return 200 status', async () => {
    const response = await request.get('/products/index');
    expect(response.status).toBe(200);
});
it(' should return 200 status', async () => {
    const response = await request.get('/products/show/1');
    expect(response.status).toBe(200);
});
describe('product ( POST / )', () => {
    const test_product : Product={
        name:'egg',
        price:20
    }
it(' should return 401 status', async () => {
    const response= await request.post('/products/create').send(test_product);
    expect(response.status).toBe(401);
});
});

});
