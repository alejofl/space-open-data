import config from "./src/config"
import { defineConfig } from "drizzle-kit";

export default defineConfig({
    dialect: 'postgresql', // 'mysql' | 'sqlite' | 'turso'
    schema: './src/db/schema.ts',
    dbCredentials: {
        host: config.db.host,
        port: config.db.port, 
        user: config.db.user,
        password: config.db.password,
        database: config.db.database,
        ssl: false,
    },
    casing: 'snake_case',
})
