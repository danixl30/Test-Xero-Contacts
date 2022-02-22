import { Issuer } from "openid-client"
import {setTokenData} from "../../CacheManager/TokenSet/cache.token.js"
import {generateUuid} from "../../utils/uuid/uuid.util.js"

const client_secret = process.env.CLIENT_SECRET
const client_id = process.env.CLIENT_ID
const scopes = process.env.SCOPES
const redirectUrl = process.env.REDIRECT_URL

const getClient = async () => {
    const issuer = await Issuer.discover('https://identity.xero.com')
    const client = new issuer.Client({
        client_id: client_id,
        client_secret: client_secret
    })
    return client
}

export const getUrl = () => {
    const id = generateUuid()
    const baseUrl = `https://login.xero.com/identity/connect/authorize?response_type=code&client_id=${client_id.trim()}&redirect_uri=${redirectUrl.trim()}&scope=${scopes.trim()}&state=${id}`
    const consertUrl = baseUrl.replaceAll(' ', '%20')
    return { consertUrl, id }
}

export const requestToken = async (queries) => {
    const state = queries.state
    delete queries.state
    const client = await getClient()
    client.CLOCK_TOLERANCE = 3500
    const token = await client.authorizationCallback(redirectUrl, queries)
    token.expires_at = new Date(new Date().getTime() + (token.expires_at * 1000))
    setTokenData(state, token)
    return state 
}

export const refreshToken = async (authid, tokenSet) => {
    const client = await getClient()
    client.CLOCK_TOLERANCE = 3500
    const newToken = await client.refresh(tokenSet.refresh_token)
    tokenSet.access_token = newToken.access_token
    tokenSet.id_token = newToken.id_token
    tokenSet.refresh_token = newToken.refresh_token
    tokenSet.expires_at = new Date(new Date().getTime() + (newToken.expires_at * 1000))
    setTokenData(authid, tokenSet)
    return tokenSet
}
