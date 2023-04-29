export const getGoogleUrl = (from: string) => {
    const rootUrl = `https://accounts.google.com/o/oauth2/v2/auth`

    const options = {
        redirect_uri: process.env.REACT_APP_GOOGLE_OAUTH_REDIRECT as string,
        client_id: process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID as string,
        access_type: 'offline',
        response_type: 'code',
        prompt: 'consent',
        scope: [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email',
        ].join(' '),
        state: from,
    }

    const qs = new URLSearchParams(options)

    return `${rootUrl}?${qs.toString()}`
}

export const getVKUrl = (from: string) => {
    const rootUrl = `https://oauth.vk.com/authorize`

    const options = {
        redirect_uri: process.env.REACT_APP_GOOGLE_OAUTH_REDIRECT as string,
        client_id: process.env.REACT_APP_VK_CLIENT_ID as string,
        display: 'popup',
        response_type: 'code',
        scope: 'email',
        v: '5.120'
    }

    const qs = new URLSearchParams(options)

    return `${rootUrl}?${qs.toString()}`
}

