import { betterAuth } from "better-auth";
import { Pool } from "pg";
 
export const auth = betterAuth({
    database: new Pool({
        // connection options
        connectionString: process.env.POSTGRES_URL!,
    })
})
