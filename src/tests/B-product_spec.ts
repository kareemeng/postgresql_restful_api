import { Product, ProductStore } from '../models/product';
const store = new ProductStore();

describe('producr tests (3)', () => {
    it('should should have an index method', () => {
        expect(store.index()).toBeDefined();
    });
    it('should return empty object', async () => {
        const result = await store.index();
        console.log(result);
        expect(result).toEqual([]);
    });
    it('should create product', async () => {
        const product: Product = {
            name: 'product 1',
            price: 20,
        };
        const result = await store.create(product);
        // console.log(result);
        expect(result).toBeTruthy();
    });
    it('should return the object we just created', async () => {
        const result = await store.show(1);
        // console.log(result);
        expect(result).toEqual({ id: 1, name: 'product 1', price: 20 });
    });
});
