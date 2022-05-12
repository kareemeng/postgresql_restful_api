import { DashboardQueries } from '../services/dashboard';
const dashboard = new DashboardQueries();
describe('dashboard tests', () => {
    it('should return empty object', async () => {
        const result = await dashboard.CompleteduserOrders(1);
        console.log(result);
        expect(result).toEqual([]);
    });
    it('should return []', async () => {
        const result = await dashboard.userOrders(1);
        console.log(result);
        expect(result).toEqual([]);
    });
});
