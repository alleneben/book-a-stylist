import { IResolvers } from 'graphql-tools';
import { getConnection } from 'typeorm'
import { Users, Providers, Services, Photo, User } from '../models/models';
import { Auth } from '../utils/auth'

export const resolvers: IResolvers = {

    Query: {
        hello: () => "hellmooo",

        users: async (_, { params }, context) => {
            const { authorization: token } = context.req.headers;

            // const response:any = await new Auth().isTokenValid(token);
            // if (response.error) throw new Error(response.error);



            const pd = JSON.parse(JSON.stringify(params));
            const data = await Users.find(pd)
            
            return data
        },

        providers: async (_, { params },context) => {
            // const { authorization: token } = context.headers;

            // const response:any = await new Auth().isTokenValid(token);
            // if (response.error) throw new Error(response.error);
            let connection = getConnection()
            const servicesRepository = connection.getRepository(Providers);
            const services = await servicesRepository.find({ relations: ['services'] });

            // console.log(services)

            const pd = JSON.parse(JSON.stringify(params));
            const data = await Providers.find(pd)
            
            return data
        },
        
        services: async (_, { params },context) => {
            const { authorization: token } = context.req.headers;

            // const response:any = await new Auth().isTokenValid(token);
            // if (response.error) throw new Error(response.error);
            let connection = getConnection()

            const servicesRepository = connection.getRepository(Providers);
            const services = await servicesRepository.find({ relations: ['services'] });

            console.log(services)

            try {
                
                const pd = JSON.parse(JSON.stringify(params));
                const data = await Services.find(pd)
    
                return data
            } catch (error) {
                console.log(error)
            }
        },
        user_photo: async (_, {params}, context) => {
            let connection = getConnection()
            const userRepository = connection.getRepository(User);
            const users = await userRepository.find({ relations: ["photos"] });
            
            return users
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

