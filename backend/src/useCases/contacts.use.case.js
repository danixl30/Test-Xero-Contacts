import {getConnections} from "../xero/api/connections.js"
import {getContacs} from "../xero/api/contacts.js"

export const manageContactsData = async (tokenSet) => {
    const tenantData = await getConnections(tokenSet.access_token)
    if (!tenantData) return null
    return await getContacs(tokenSet.access_token, tenantData.tenantId)
}
