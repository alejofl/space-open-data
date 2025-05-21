import dotenv from 'dotenv';

type Config = {
    port: number;
    db: {
        host: string;
        port: number;
        user: string;
        password: string;
        database: string;
    }
}

dotenv.config({ path: "../.env" });

const config: Config = {
    port: Number(process.env.BACKEND_PORT) || 3001,
    db: {
        host: process.env.POSTGRES_HOST!,
        port: Number(process.env.POSTGRES_PORT),
        user: process.env.POSTGRES_USER!,
        password: process.env.POSTGRES_PASSWORD!,
        database: process.env.POSTGRES_DB!,
    }
};

export default config;