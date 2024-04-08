declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT?: number;
            DATABASE_URL: string;
            DABABASE_NAME: string;
        }
    }
}

export {}