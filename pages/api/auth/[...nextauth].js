import NextAuth from 'next-auth';
import {signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '@/app/utils/firebase'

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
    callbacks: {
        async redirect({ url, baseUrl}) {
            if (url.startsWith('/api/auth/callback/google')) {
                return '/';
            }
            return baseUrl;
        },
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {},
            async authorize(credentials) {
                return await signInWithEmailAndPassword(auth, credentials.email || '', credentials.password || '')
                    .then(userCredential => {
                        if (userCredential.user) {
                            return userCredential.user;
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
};

export default NextAuth(authOptions);