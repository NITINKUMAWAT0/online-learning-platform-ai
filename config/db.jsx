// config/db.js
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is not set');
}

const sql = neon(process.env.DATABASE_URL);
export const db = drizzle({ client: sql });

// Test connection function (optional)
export async function testConnection() {
    try {
        const result = await sql`SELECT 1 as test`;
        console.log('Database connection successful:', result);
        return true;
    } catch (error) {
        console.error('Database connection failed:', error);
        return false;
    }
}