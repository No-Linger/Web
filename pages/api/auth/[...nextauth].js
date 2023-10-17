import NextAuth from 'next-auth';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from "@/app/firebase";
//providers credentials
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

if (!GOOGLE_CLIENT_ID)
    throw new Error("Invalid env variable: GOOGLE_CLIENT_ID");

if (!GOOGLE_CLIENT_SECRET)
    throw new Error("Invalid env variable: GOOGLE_CLIENT_SECRET");

const authOptions = {
    pages: {
        signIn: '/signin'
    },
    callbacks: {
        async redirect({ url, baseUrl }) {
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
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
};

module.exports = NextAuth(authOptions);
const handler = NextAuth(authOptions);
module.exports.GET = handler;
module.exports.POST = handler;
