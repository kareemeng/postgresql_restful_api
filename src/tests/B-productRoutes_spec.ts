import { app } from '../index';
import supertest from 'supertest';
import {Product} from '../models/product'
import { auth_token } from './A-userRoutes_spec';
const request = supertest(app);
describe('products ( get / ) (4)', () => {
    it(' should return all products info', async () => {
        const response = await request.get('/products/index');
        expect(response.status).toBe(200);
    });
    it(' should return product1 info', async () => {
        const response = await request.get('/products/show/1');
        expect(response.status).toBe(200);
    });
});
describe('product ( POST / ) (4)', () => {
    const test_product: Product = {
        name: 'egg',
        price: 20,
    };
    it('should reject create no token given ', async () => {
        const response = await request
        .post('/products/create')
        .send(test_product);
        expect(response.status).toBe(401);
    });
    it('should create new product ', async () => {
        const response = await request
            .post('/products/create')
            .send(test_product)
            .set('Authorization', auth_token);
        expect(response.status).toBe(200);
    });
});
