"user server"
import { redirect } from "next/navigation"
import { useSession, signIn, signOut } from "next-auth/react"


const getOauthGoogleUrl = () => {
    const { GOOGLE_AUTHORIZED_REDIRECT_URI, GOOGLE_CLIENT_ID } =
        process.env
    const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth'
    const options = {
        redirect_uri: GOOGLE_AUTHORIZED_REDIRECT_URI,
        client_id: GOOGLE_CLIENT_ID,
        access_type: 'offline',
        response_type: 'code',
        prompt: 'consent',
        scope: [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email'
        ].join(' ')
    }
    const qs = new URLSearchParams(options)
    return `${rootUrl}?${qs.toString()}`
}


export default function DefaultPage() {
    // redirect("/home")
    const { data: session } = useSession()
    if (session) {
        return (
            <>
                Signed in as {session.user.email} <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
        </>
    )

}