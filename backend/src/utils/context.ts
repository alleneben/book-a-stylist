import { Auth } from './auth'
import jwt from 'jsonwebtoken';

export const getContext = (context: any) => {
    if (!context.req.headers.authorization) {
        throw new Error("Authorisation token is required in header")
    }

    const isAuthenticated = async () => {

        const { authorization: token } = context.req.headers
        const response: any = await new Auth().isTokenValid(token);

        if (response.error) throw new Error(response.error);
        //const decoded = jwt.decode(token, { complete: true });
        console.log('user is authenticated')
        return
    }

    return {
        isAuthenticated,
        req: context.req,
        user: { email: 'rocky.asante@gmail.com' } //replace with token or response
    };
}