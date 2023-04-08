import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import appconfig from './config/server/main';
export const app = express();
const port: number = 3000;
const address: string = `0.0.0.0:${port}`;

// (async()=>{})()
// const app: express.Application = express()

app.use(bodyParser.json());
appconfig(app);


app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(port, function () {
    console.log(`starting app on: ${address}`);
});

export default app;
