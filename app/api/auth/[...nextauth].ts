import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";


export const googleProviderOptions: AuthOptions = {
    callbacks: {
        async signIn({ account, profile }) {
            if (account.provider === "google") {
                return profile.name && profile.email.endsWith("@gmail.com")
            }
            return true
        },
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                    redirect_uri: "http://localhost:3000/api/auth/callback/google",
                    scope: [
                        'https://www.googleapis.com/auth/userinfo.profile',
                        'https://www.googleapis.com/auth/userinfo.email'
                    ].join(' ')
                }
            }
        })
    ],
}

export default NextAuth(googleProviderOptions)