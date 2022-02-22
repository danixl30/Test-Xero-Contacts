import {getConnections} from "../xero/api/connections.js"
import {getOrganization} from "../xero/api/organization.js"

export const manageOrganisationData = async (tokenSet) => {
    const tenantData = await getConnections(tokenSet.access_token)
    if (!tenantData) return null
    return await getOrganization(tokenSet.access_token, tenantData.tenantId)
}
