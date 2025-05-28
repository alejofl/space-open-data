import { drizzle } from 'drizzle-orm/node-postgres';
import config from '../config';

const db = drizzle({
    connection: {
        host: config.db.host,
        port: config.db.port,
        user: config.db.user,
        password: config.db.password,
        database: config.db.database,
    },
    casing: 'snake_case'
});

export default db;
