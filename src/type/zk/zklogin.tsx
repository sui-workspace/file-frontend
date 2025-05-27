import NextAuth, { NextAuthOptions } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import { generateNonce, generateRandomness } from '@mysten/zklogin'

interface ZkLoginProfile {
    sub: string
    email?: string
    name?: string
    picture?: string
    aud: string
    iss: string
}

interface ZkLoginCredentials {
    jwt: string
    ephemeralKeyPair: {
        publicKey: string
        privateKey: string
    }
    randomness: string
    maxEpoch: number
}