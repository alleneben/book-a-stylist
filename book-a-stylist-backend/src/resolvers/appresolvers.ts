import { IResolvers } from 'graphql-tools';
import { Users, Providers, Services } from '../models/models';
import { Auth } from '../utils/auth'

const books = [
    { id: 1, title: 'The Trials of Brother Jero',  cover_image_url: 'ssdsds', average_rating: 8, authorId: 1 },
    { id: 2, title: 'Half of a Yellow Sun',  cover_image_url: 'dsdsds', average_rating: 9, authorId: 3 },
    { id: 3, title: 'Americanah',  cover_image_url: 'dsdsds', average_rating: 9, authorId: 3 },
    { id: 4, title: 'King Baabu',  cover_image_url: 'sdsds', average_rating: 7, authorId: 1 },
    { id: 5, title: 'Children of Blood and Bone',  cover_image_url: 'sdsds', average_rating: 7, authorId: 2 },
  ];

  const authors = [
    { id: 1, first_name: 'Wole', last_name: 'Soyinka' },
    { id: 2, first_name: 'Tomi', last_name: 'Adeyemi' },
    { id: 3, first_name: 'Chimamanda', last_name: 'Adichie' },
  ];

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
        },
        
        services: async (_, { params },context) => {
            const { authorization: token } = context.headers;

            // const response:any = await new Auth().isTokenValid(token);
            // if (response.error) throw new Error(response.error);
            try {
                
                const pd = JSON.parse(JSON.stringify(params));
                const data = await Services.find(pd)
    
                return data
            } catch (error) {
                console.log(error)
            }
        },
        books: () => books
    },

    Mutation: {
        users: async (_, { params },context) => {
            const pd = JSON.parse(JSON.stringify(params));
            const data = await Users.save(pd)
            
            return []
        }
    }


}

