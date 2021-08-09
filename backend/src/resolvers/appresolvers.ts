import { IResolvers } from 'graphql-tools';
import { getConnection } from 'typeorm'
import { User, Provider, Service } from '../entities';

export const resolvers: IResolvers = {

    Query: {
        me: (_parent, _, { user }) => {
            return User.findOne({ email: user.email });
        },
        users: async (_, { params = {} }, { isAuthenticated }) => {
            await isAuthenticated()

            const pd = JSON.parse(JSON.stringify(params));
            const data = await User.find(pd)

            return data
        },

        providers: async (_, { params = {} }, { isAuthenticated }) => {

            await isAuthenticated()

            const pd = JSON.parse(JSON.stringify(params));
            const data = await Provider.find(pd)

            return data
        },

        services: async (_, { params }, { isAuthenticated }) => {
            isAuthenticated();
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
        users: async (_, { params }, context) => {
            const pd = JSON.parse(JSON.stringify(params));
            const data = await User.save(pd)
            return []
        }
    }


}

