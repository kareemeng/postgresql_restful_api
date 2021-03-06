// @ts-ignore
import Client from '../config/database/database';
import { hash_password } from '../middlewares/hash-password';
export type User = {
    id?: number;
    first_name: string;
    last_name: string;
    password: string;
    token?: string;
};

export class UserStore {
    async index(): Promise<User[]> {
        try {
            // @ts-ignore
            const conn = await Client.connect();
            const sql = 'SELECT id,first_name,last_name FROM users';

            const result = await conn.query(sql);

            conn.release();

            return result.rows;
        } catch (err) {
            throw new Error(`Could not get users. Error: ${err}`);
        }
    }

    async show(id: number): Promise<User> {
        try {
            const sql =
                'SELECT id,first_name,last_name FROM users WHERE id=($1)';
            // @ts-ignore
            const conn = await Client.connect();

            const result = await conn.query(sql, [id]);

            conn.release();

            return result.rows[0];
        } catch (err) {
            throw new Error(`Could not get users ${id}. Error: ${err}`);
        }
    }

    async create(user: User): Promise<User> {
        try {
            const sql =
                'INSERT INTO users (first_name,last_name,password) VALUES($1, $2,$3) RETURNING *';
            // @ts-ignore
            const conn = await Client.connect();
            const password = hash_password(user.password);
            const result = await conn.query(sql, [
                user.first_name,
                user.last_name,
                password,
            ]);

            const rows = result.rows[0];

            conn.release();

            return rows;
        } catch (err) {
            throw new Error(
                `Could not add users ${user.first_name}. Error: ${err}`
            );
        }
    }
}
