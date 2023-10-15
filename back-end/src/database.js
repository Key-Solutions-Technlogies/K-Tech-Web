import mysql from 'mysql2/promise'
import { config as dotenv } from "dotenv";
dotenv();


export const connect = async() => {
    return  await mysql.createConnection(process.env.DATABASE_URL);

    
}





