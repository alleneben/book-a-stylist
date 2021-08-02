import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
// import { buildSchema } from 'type-graphql';
import express from 'express';
import dotenv from "dotenv";

dotenv.config();
import { DB } from  './db/db';
import {resolvers} from './resolvers/appresolvers';
import { typeDefs } from './typedefs/typedefs';


class Server {
    
    
    public async start() {
        const db = new DB();
        const server = new ApolloServer({
            typeDefs,
            resolvers:[resolvers,],
            context: ({ req, res}) => ({ req, res})
        });
        
        const app = express();


        server.applyMiddleware({ app })

        
        app.listen({ port: process.env.PORT}, () => {

            console.log(`server running at http://localhost:${process.env.PORT}${server.graphqlPath}`);
        })
        
    }

}

const server = new Server();
server.start()