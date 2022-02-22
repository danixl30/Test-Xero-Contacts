import {getAccounts} from "../xero/api/accounts.js"
import {getConnections} from "../xero/api/connections.js"

export const manageAccountsData = async (tokenSet) => {
    const tenantData = await getConnections(tokenSet.access_token)
    if (!tenantData) return null
    return await getAccounts(tokenSet.access_token, tenantData.tenantId)
}
