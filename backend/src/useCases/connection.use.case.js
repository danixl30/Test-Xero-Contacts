import {deleteTokenData} from "../CacheManager/TokenSet/cache.token.js"
import {deleteConnections, getConnections} from "../xero/api/connections.js"

export const manageDeleteConnection = async (authid, tokenSet) => {
    const tenantData = await getConnections(tokenSet.access_token)
    if (!tenantData) return null
    await deleteConnections(tokenSet.access_token, tenantData.id) 
    deleteTokenData(authid)
}

export const manageConnectionData = async (tokenSet) => {
    return await getConnections(tokenSet.access_token)
}
