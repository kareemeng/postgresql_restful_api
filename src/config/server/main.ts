import { Application } from 'express';
import routes from './routes';

export default (App: Application) => {
    routes(App);
};
