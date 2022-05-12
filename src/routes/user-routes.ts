import express from 'express';
import { UserStore, User } from '../models/user';
import jwt from 'jsonwebtoken';
import { check_token } from '../middlewares/auth';
import { runInNewContext } from 'vm';

const router = express.Router();
const user = new UserStore();

// router.get('/',async (req:express.Request, res: express.Response,next:Function) => {
//     res.send('from users')
// });

router.get(
    '/index',
    check_token,
    async (req: express.Request, res: express.Response, next: Function) => {
        try {
            const result = await user.index();
            res.json(result);
        } catch (error) {
            res.status(404).json(error);
        }
    }
);
router.get(
    '/show/:id',
    check_token,
    async (req: express.Request, res: express.Response, next: Function) => {
        try {
            const id = parseInt(req.params.id);
            const result = await user.show(id);
            res.json(result);
        } catch (error) {
            res.status(404).json(error);
        }
    }
);
router.post(
    '/create',
    async (req: express.Request, res: express.Response, next: Function) => {
        try {
            const this_user: User = {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                password: req.body.password,
            };
            const newuser = await user.create(this_user);
            const token = jwt.sign(
                { user: newuser },
                process.env.SECRET as string
            );
            res.setHeader('Authorization', 'Bearer ' + token);
            res.json({ user: newuser});
        } catch (error) {
            res.status(404).json(error);
        }
    }
);

export default router;
