require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME || 'ecommerce_db',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || '',
    ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false
});

async function main() {
    try {
        const client = await pool.connect();
        console.log('Connected to DB');

        // Check columns
        const res = await client.query(`
            SELECT column_name, data_type 
            FROM information_schema.columns 
            WHERE table_name = 'products' AND table_schema = 'inventory'
        `);
        console.log('Columns in inventory.products:', res.rows.map(r => r.column_name + '(' + r.data_type + ')'));

        // Try insert
        try {
            const insertRes = await client.query(`
                INSERT INTO inventory.products (sku, product_name, price)
                VALUES ($1, $2, $3)
                RETURNING product_id
            `, ['DEBUG-SKU-' + Date.now(), 'Debug Product', 100]);
            console.log('Insert successful:', insertRes.rows[0]);
            
            // Cleanup
            await client.query('DELETE FROM inventory.products WHERE product_id = $1', [insertRes.rows[0].product_id]);
        } catch (err) {
            console.error('Insert failed:', err.message);
        }

        client.release();
    } catch (err) {
        console.error('Connection failed:', err);
    } finally {
        pool.end();
    }
}

main();
