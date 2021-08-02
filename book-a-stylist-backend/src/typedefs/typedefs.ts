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
        services: [Services]
    }

    type Services {
        service_id: String
        image: String
        service_name: String
        service_description: String
        service_category_id: Int
        user_id: Int
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

    type Users {
        user_id: Int
        name: String
        photos: [Photo]
    }

    type Photo {
        photo_id: Int
        url: String
        user: [Users]
    }

    input Params {
        user_id: ID
        username: String
        user_uuid: String
        fullname: String
        id: String
    }

    type Query {
        hello: String!
        users(params: Params): [User]
        providers(params: Params): [Provider]
        services(params: Params): [Services]
        user_photo(params: Params): [Users]
    }

    type Mutation {
        users(params: Params): [User]
    }

`