import NextAuth from 'next-auth';
import {signInWithEmailAndPassword} from 'firebase/auth';
import { authClient } from '@/app/utils/firebase'

import 'dotenv/config'

//providers credentials
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

const id = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
const privateK = process.env. NEXT_PUBLIC_GOOGLE_CLIENT_SECRET

   if (!id)
       throw new Error("Invalid env variable: GOOGLE_CLIENT_ID");

   if (!privateK)
       throw new Error("Invalid env variable: GOOGLE_CLIENT_SECRET");

const authOptions = {
    pages: {
        signIn: '/signin'
    },
    // callbacks: {
    //     async redirect({ url, baseUrl}) {
    //         if (url.startsWith('/api/auth/callback/google')) {
    //             return '/signin';
    //         }

            
    //         return baseUrl;
    //     },
        
    // },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {},
            async authorize(credentials) {
                return await signInWithEmailAndPassword(authClient, credentials.email || '', credentials.password || '')
                    .then(userCredential => {
                        if (userCredential.user) {
                            //console.log(userCredential.user.uid)
                            return {email:userCredential.user.email,accessToken:userCredential.user.accessToken}
                        }
                        return null;
                    });
            }
        }),
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks:{
              async jwt({ user, token }) {
                if (user) {
                  token.email = user.email;
                  token.accessToken= user.accessToken;
          
                }
                return token;
              },
          


            async session({ session, user,token }) {
                session.accessToken = token.accessToken
                
                return session
              }
      
    }
};

export default NextAuth(authOptions);