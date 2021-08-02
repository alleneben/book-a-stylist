import { gql } from 'apollo-server-express'


export const typeDefs = gql`
    type User {
        user_id: ID
        username: String
        user_uuid: String
        fullname: String
        lastname: String
        email: String
	    firstname: String
        password_reset_hash: String
    }

    type Provider {
        user_id: Int
        provider_id: Int
        provider_username: String
        provider_name: String
        fullname: String
        lastname: String
        email: String
	    firstname: String
        address: String
        phone: String
        image: String
        image_cover: String
        description: String
        services: [Service]
    }

    type Service {
        service_id: String
        image: String
        service_name: String
        service_description: String
        service_category_id: Int
        user_id: Int
        provider_id: Int
        created_date: Int
        price: Float
        available_count: Int
        public: Int
        price_show: Int
        customer_cancel: Int
        schedule_type: Int
        service_booking_type: String
        service_min_duration: Int
        can_travel: Int
        can_travel_charge: Int
        provider: Provider
    }
    
    type Author {
        id: Int!
        first_name: String!
        last_name: String!
        books: [Book]!
      }
  
      type Book {
        id: Int!
        title: String!
        cover_image_url: String!
        average_rating: Float!
        author: Author!
      }

    input Params {
        user_id: ID
        username: String
        user_uuid: String
        fullname: String
    }

    type Query {
        hello: String!
        users(params: Params): [User]
        providers(params: Params): [Provider]
        services(params: Params): [Service]
        books: [Book!]!
        book(id: Int!): Book!
        author(id: Int!): Author!
    }

    type Mutation {
        users(params: Params): [User]
    }

`