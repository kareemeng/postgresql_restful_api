import { User, UserStore } from '../models/user';
const store = new UserStore();

describe('user tests (1)', () => {
    it('should should have an index method', () => {
        expect(store.index()).toBeDefined();
    });
    it('should return empty object', async () => {
        const result = await store.index();
        // console.log(result);
        expect(result).toEqual([]);
    });
    it('should create user', async () => {
        const user: User = {
            first_name: 'kareem',
            last_name: 'ahmed',
            password: '123',
        };
        const result = await store.create(user);
        // console.log(result);
        expect(result).toBeTruthy();
    });
    it('should return non-empty object', async () => {
        const result = await store.show(1);
        // console.log(result);
        expect(result).toBeTruthy();
    });
});
