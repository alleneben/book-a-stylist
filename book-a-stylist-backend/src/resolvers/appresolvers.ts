import { IResolvers } from 'graphql-tools';
import { Users, Providers } from '../models/models';
import { Auth } from '../utils/auth'



export const resolvers: IResolvers = {

    Query: {
        hello: () => "hellmooo",

        users: async (_, { params }, context) => {
            const { authorization: token } = context.headers;

            const response:any = await new Auth().isTokenValid(token);
            if (response.error) throw new Error(response.error);



            const pd = JSON.parse(JSON.stringify(params));
            const data = await Users.find(pd)
            
            return data
        },

        providers: async (_, { params },context) => {
            const { authorization: token } = context.headers;

            const response:any = await new Auth().isTokenValid(token);
            if (response.error) throw new Error(response.error);

            const pd = JSON.parse(JSON.stringify(params));
            const data = await Providers.find(pd)
            
            return data
        }
    },

    Mutation: {
        users: async (_, { params },context) => {
            const pd = JSON.parse(JSON.stringify(params));
            const data = await Users.save(pd)
            
            return []
        }
    }


}

