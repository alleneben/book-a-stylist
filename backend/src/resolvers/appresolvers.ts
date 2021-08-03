import { IResolvers } from 'graphql-tools';
import { getConnection } from 'typeorm'
import { User, Provider, Service } from '../entities';
import { Auth } from '../utils/auth'

export const resolvers: IResolvers = {

    Query: {
        hello: () => "hellooo",

        users: async (_, { params }, context) => {
            const { authorization: token } = context.req.headers;

            const response:any = await new Auth().isTokenValid(token);
            if (response.error) throw new Error(response.error);

            const pd = JSON.parse(JSON.stringify(params));
            const data = await User.find(pd)
            
            return data
        },

        providers: async (_, { params },context) => {
            const { authorization: token } = context.req.headers;

            // const response:any = await new Auth().isTokenValid(token);
            // if (response.error) throw new Error(response.error);
    

            const pd = JSON.parse(JSON.stringify(params));
            const data = await Provider.find(pd)
            
            return data
        },
        
        services: async (_, { params },context) => {
            const { authorization: token } = context.req.headers;

            const response:any = await new Auth().isTokenValid(token);
            if (response.error) throw new Error(response.error);

            let connection = getConnection()
            const servicesRepository = connection.getRepository(Provider);
            const services = await servicesRepository.find({ relations: ['service'] });

            try {
                
                const pd = JSON.parse(JSON.stringify(params));
                const data = await Service.find(pd)
    
                return data
            } catch (error) {
                console.log(error)
            }
        }
    },

    Mutation: {
        users: async (_, { params },context) => {
            const pd = JSON.parse(JSON.stringify(params));
            const data = await User.save(pd)
            
            return []
        }
    }


}

