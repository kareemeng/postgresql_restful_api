import dotenv from 'dotenv';
import { Pool } from 'pg';

//initialize the environment variables the .env can not be used without it
dotenv.config();
const {
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_TEST_DB,
    POSTGRES_USERNAME,
    POSTGRES_PASSWORD,
    NODE_ENV,
} = process.env;

// console.log('data base name:',NODE_ENV==='test'?POSTGRES_TEST_DB:POSTGRES_DB);

const client = new Pool({
    host: POSTGRES_HOST,
    database: NODE_ENV === 'test' ? POSTGRES_TEST_DB : POSTGRES_DB,
    user: POSTGRES_USERNAME,
    password: POSTGRES_PASSWORD,
});

export default client;
