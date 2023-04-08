import express from 'express';
import { DashboardQueries } from '../services/dashboard';
import { check_token } from '../middlewares/auth';

const router = express.Router();
const dashboard = new DashboardQueries();

router.get(
    '/userOrders/:id',
    check_token,
    async (req: express.Request, res: express.Response, next: Function) => {
        try {
            const id = parseInt(req.params.id);
            const result = await dashboard.userOrders(id);
            res.json(result);
        } catch (error) {
            res.status(404).json(error);
        }
    }
);
router.get(
    '/completeduserOrders/:id',
    check_token,
    async (req: express.Request, res: express.Response, next: Function) => {
        try {
            const id = parseInt(req.params.id);
            const result = await dashboard.CompleteduserOrders(id);
            res.json(result);
        } catch (error) {
            res.status(404).json(error);
        }
    }
);
// router.get('/productsInOrders',check_token,async (req:express.Request, res: express.Response,next:Function) => {
//     try {
//         const result = await dashboard.productsInOrders();
//         res.json(result);
//     } catch (error) {
//         res.status(404).json(error);
//     }
// });

export default router;
