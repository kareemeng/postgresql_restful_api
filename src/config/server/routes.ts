import express from 'express';
import userRoutes from '../../routes/user-routes';
import productRoutes from '../../routes/product-routes';
import dashboardRoutes from '../../routes/dashboard-routes';

export default (app: express.Application) => {
    app.use('/users', userRoutes);
    app.use('/products', productRoutes);
    app.use('/dashboard', dashboardRoutes);
};
