"use client";

import React from 'react'

import "../styles/globals.css"

import { initMaterialTailwind } from '@material-tailwind/html';

initMaterialTailwind();




import { SessionProvider } from "next-auth/react"
import GoogleProvider from "next-auth/providers/google"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>My App</title>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body>
                <SessionProvider>
                    {children}
                </SessionProvider>
            </body>
        </html>
    )
}