import * as jwt from "jsonwebtoken";
import jwksClient from 'jwks-rsa';
import dotenv from "dotenv";

dotenv.config();



export class Auth {


    constructor(){}


    public getKey(header: any, callback: any){
        const client = jwksClient({jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`});
        
        
        client.getSigningKey(header.kid, (err: any, key: any) => {
            if (!key) throw new Error("Coulnot Establish Contact with server");
            
            const signingKey = key.publicKey || key.rsaPublicKey;

            callback(null, signingKey);
        })
    }

   
    public isTokenValid(token: any){

        if (token){
            const bearerToken = token.split(" ")

            const result = new Promise((resolve, reject) => { 
                jwt.verify(
                    bearerToken[1],
                    this.getKey,
                    {
                        audience: process.env.AUTH0_API_IDENTIFIER,
                        issuer: `https://${process.env.AUTH0_DOMAIN}/`,
                        algorithms: ['RS256']
                    },
                    (error: any, decoded: any) => {
                        
                        if(error) reject({ error });
            
                        if(decoded) resolve({ decoded });
                    }
                );
            });
            
            return result;
        }

        return { error: "No token provided" }; 
    }
}