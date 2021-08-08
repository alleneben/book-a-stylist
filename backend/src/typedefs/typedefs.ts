import { gql } from 'apollo-server-express'


export const typeDefs = gql`
    type User {
        id: ID
        username: String
        user_uuid: String
        fullname: String
        lastname: String
        email: String
	    firstname: String
        password_reset_hash: String
    }

    type Provider {
        id: Int
        userId: Int
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
        service: [Service]
    }

    type Service {
        id: Int
        image: String
        service_name: String
        service_description: String
        service_category_id: Int
        userId: Int
        providerId: Int
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

    input Params {
        userId: ID
        username: String
        user_uuid: String
        fullname: String
    }

    type Query {
        me: User!
        users(params: Params): [User]
        providers(params: Params): [Provider]
        services(params: Params): [Service]
    }

    type Mutation {
        users(params: Params): [User]
    }

`