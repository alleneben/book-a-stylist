import { ConnectionOptions, createConnection, Connection } from "typeorm";
import dotenv from "dotenv"
import { Users, Providers } from "../models/models";



dotenv.config();



const DB_CONFIG: ConnectionOptions = {
    name:'default',
    // @ts-ignore
    type: process.env.DB_CONNECTION,
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    entities: [Users, Providers]
}

export class DB {
 
    constructor(){
        this.connect();
    }


    async connect() {
        const connection: Connection = await createConnection(DB_CONFIG);    

        return connection;
    }
}
