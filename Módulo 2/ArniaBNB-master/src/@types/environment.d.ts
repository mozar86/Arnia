declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT?: number;
            DATABASE_URL: string;
            DATABASE_NAME: string;
            JWT_SECRET_KEY: string;
        }
    }
}

export {};
