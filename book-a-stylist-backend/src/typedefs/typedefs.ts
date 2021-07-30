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
        user_id: Int!
        provider_id: Int!
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
    }

    type Mutation {
        users(params: Params): [User]
    }

`