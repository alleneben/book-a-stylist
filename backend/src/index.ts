import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
// import { buildSchema } from 'type-graphql';
import express from 'express';
import dotenv from "dotenv";

dotenv.config();
import { DB } from './db/db';
import { resolvers } from './resolvers/appresolvers';
import { typeDefs } from './typedefs/typedefs';
import { getContext } from './utils/context';


class Server {


    public async start() {
        await new DB();
        const server = new ApolloServer({
            typeDefs,
            resolvers: [resolvers,],
            context: (context) => getContext(context),
            debug: true,
        });

        const app = express();


        server.applyMiddleware({ app })


        app.listen({ port: process.env.PORT }, () => {

            console.log(`server running at http://localhost:${process.env.PORT}${server.graphqlPath}`);
        })

    }

}

const server = new Server();
server.start()