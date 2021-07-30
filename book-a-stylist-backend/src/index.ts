import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import dotenv from "dotenv";

dotenv.config();
import { DB } from  './db/db';
import { resolvers } from './resolvers/appresolvers';
import { typeDefs } from './typedefs/typedefs';

// const config = {
//     authRequired: false,
//     auth0Logout: true,
//     secret: process.env.API_SECRET_KEY,
//     baseURL: process.env.APP_URL,
//     clientID: process.env.CLIENT_ID,
//     issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}`
// };

class Server {
    
    
    public start() {
        const db = new DB();
        const server = new ApolloServer({
            typeDefs,
            resolvers:[resolvers,],
            context: ({ req }) => {
                
                return req;
            }
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