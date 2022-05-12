import Client from '../config/database/database';

export class DashboardQueries {
    // Get all products that have been included in orders
    // async productsInOrders(): Promise<{name: string, price: number, order_id: string}[]> {
    //     try {
    //       //@ts-ignore
    //     const conn = await Client.connect();
    //     const sql = 'SELECT name, price, order_id FROM products INNER JOIN order_products ON products.id = order_products.product_id';
    //     const result = await conn.query(sql);
    //     conn.release();
    //     return result.rows;
    //     } catch (err) {
    //     throw new Error(`unable get products and orders: ${err}`);
    //     }
    // }

    async userOrders(
        id: number
    ): Promise<
        { quantity: number; price: number; name: string; order_id: string }[]
    > {
        try {
            //@ts-ignore
            const conn = await Client.connect();
            const sql =
                'SELECT quantity,price,products.name,products_in_order.order_id FROM(SELECT quantity,product_id,order_id FROM (select orders.id,user_id,first_name,status FROM users INNER JOIN orders  ON orders.user_id=($1) and users.id=($2) ) AS order_info INNER JOIN order_products ON order_info.id=order_products.order_id )AS products_in_order INNER JOIN products ON products_in_order.product_id=products.id;';
            const result = await conn.query(sql, [id, id]);
            conn.release();
            return result.rows;
        } catch (err) {
            throw new Error(
                `unable get products belongs to user :${id} error: ${err}`
            );
        }
    }
    async CompleteduserOrders(
        id: number
    ): Promise<
        { quantity: number; price: number; name: string; order_id: string }[]
    > {
        try {
            //@ts-ignore
            const conn = await Client.connect();
            const sql =
                'SELECT quantity,price,products.name,products_in_order.order_id FROM(SELECT quantity,product_id,order_id FROM (select orders.id,user_id,first_name,status FROM users INNER JOIN orders  ON orders.user_id=($1) and users.id=($2) and status=($3) ) AS order_info INNER JOIN order_products ON order_info.id=order_products.order_id )AS products_in_order INNER JOIN products ON products_in_order.product_id=products.id;';
            const result = await conn.query(sql, [id, id, 'complete']);
            conn.release();
            return result.rows;
        } catch (err) {
            throw new Error(
                `unable get products belongs to user :${id} error: ${err}`
            );
        }
    }
}
