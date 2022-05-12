import express from 'express';
import { ProductStore, Product } from '../models/product';
import { check_token } from '../middlewares/auth';

const router = express.Router();
const product = new ProductStore();

router.get(
    '/index',
    async (req: express.Request, res: express.Response, next: Function) => {
        try {
            const result = await product.index();
            res.json(result);
        } catch (error) {
            res.status(404).json(error);
        }
    }
);
router.get(
    '/show/:id',
    async (req: express.Request, res: express.Response, next: Function) => {
        try {
            const id = parseInt(req.params.id);
            const result = await product.show(id);
            res.json(result);
        } catch (error) {
            res.status(404).json(error);
        }
    }
);
router.post(
    '/create',
    check_token,
    async (req: express.Request, res: express.Response, next: Function) => {
        try {
            const thisproduct: Product = {
                name: req.body.name,
                price: req.body.price,
            };
            const newproduct = await product.create(thisproduct);
            res.json(newproduct);
        } catch (error) {
            res.status(404).json(error);
        }
    }
);
// router.put('/update/:id',async(req:express.Request, res:express.Response,next:Function) => {
//     const product: Product = {
//         id: req.params.id,
//         name: req.body.name,
//         price: req.body.price
//     };
//     try {
//     res.send('this is the EDIT route')
//     } catch (err) {
//     res.status(400).json(err)
//     }
// })
// router.delete('/delete/:id', async(req:express.Request, res: express.Response,next:Function) => {
//     try {
//         const id = req.params.id;
//         const deleted = await blog.delete(id);
//         res.json(deleted);
//     } catch (error) {
//         res.status(404).json(error);
//     }

// })

export default router;
