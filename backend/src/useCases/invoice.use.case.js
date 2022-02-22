import {getConnections} from "../xero/api/connections.js"
import {getInvoices, createInvoice} from "../xero/api/invoices.js"

export const manageInvoicesData = async (tokenSet) => {
    const tenantData = await getConnections(tokenSet.access_token)
    if (!tenantData) return null
    return await getInvoices(tokenSet.access_token, tenantData.tenantId)
}

export const manageCreateInvoice = async (tokenSet, data) => {
    const tenantData = await getConnections(tokenSet.access_token)
    if (!tenantData) return null
    const { description, quantity, accountCode, contactId, amount } = data
    return await createInvoice(tokenSet.access_token, tenantData.tenantId, contactId, description, quantity, amount, accountCode)
}
