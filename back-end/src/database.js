import mysql from 'mysql2/promise'
import { config } from "./config"



const connect = async() => {
    const connection = await mysql.createConnection(config);

    const result = await connection.query('SELECT * FROM bv4rkfhexrvnpun4adpx.Cliente')
    console.log(result);
}

connect();




