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

        // Mock request data
        const productData = {
            sku: 'TEST-SKU-' + Date.now(),
            product_name: 'Test Product ' + Date.now(),
            price: 999.99,
            quantity: 50,
            description: 'Test Description'
        };

        console.log('Testing create product with:', productData);

        // We need to call the repository create method. 
        // Since we can't easily import the repository in this standalone script without mocking database require in it,
        // we will manually test the logic by mimicking what the controller does or we can try to require the repository
        // provided the paths resolve correctly from where we run this.

        // Let's try to require the repository.
        // The script is in Ecommerce-backend root.
        const productsRepository = require('./src/repositories/products.repository');

        // We need to make sure the repository uses the pool we configured or the one in database/index.js
        // The repository requires '../database', which resolves to src/database/index.js.
        // We should ensure that module is initialized correctly.
        // Actually, src/database/index.js picks up env vars, so we just need to make sure dotenv is loaded before requiring repository.

        try {
            const product = await productsRepository.create(productData);
            console.log('Product created:', product.product_id);

            // Verify variant
            const variantRes = await client.query('SELECT * FROM inventory.product_variants WHERE product_id = $1', [product.product_id]);
            if (variantRes.rows.length > 0) {
                console.log('Variant found:', variantRes.rows[0].variant_sku);
                console.log('Price:', variantRes.rows[0].price);
                console.log('Stock:', variantRes.rows[0].stock_quantity);

                if (parseFloat(variantRes.rows[0].price) === productData.price &&
                    variantRes.rows[0].stock_quantity === productData.quantity) {
                    console.log('SUCCESS: Product and Variant created correctly.');
                } else {
                    console.error('FAIL: Variant data mismatch.');
                }
            } else {
                console.error('FAIL: No variant found.');
            }

            // Cleanup
            await productsRepository.delete(product.product_id);
            console.log('Cleanup successful');

        } catch (err) {
            console.error('Create failed:', err);
        }

        client.release();
    } catch (err) {
        console.error('Setup failed:', err);
    } finally {
        // We need to close the pool from src/database/index.js too, 
        // but we can't easily access it. We'll just exit.
        process.exit(0);
    }
}

main();
