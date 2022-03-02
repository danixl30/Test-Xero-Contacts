import {getConnections} from "../xero/api/connections.js"
import {getContacs} from "../xero/api/contacts.js"
import {getInvoicesByPage, getInvoices} from "../xero/api/invoices.js"

const getAllInvoices = async (access_token, tenantId) => {
    let invoices = []
    let page = 1
    while (true) {
        const data = await getInvoicesByPage(access_token, tenantId, page)
        if (data.Invoices.length === 0) break
        invoices = [...invoices, ...data.Invoices]
        page++
    }
    return invoices
}

const getContactsFilter = async (access_token, tenantId) => {
    const data = await getContacs(access_token, tenantId)
    const contactsData = new Map()
    data.Contacts.forEach(item => {
        const id = item.ContactID
        const provider = item.IsSupplier
        const name = item.Name
        const status = item.ContactStatus
        const accountNumber = item.AccountNumber || ''
        if (provider && status === 'ACTIVE' && accountNumber.includes('PAN')) {
            contactsData.set(id, { name })
        }
    })
    return contactsData
}

const setData = (contacts) => {
    const resultArray = []
    for (const value of contacts.values()){
        if (!value.numInvoices) continue
        const newRecord = {
            name: value.name,
            numInvoices: value.numInvoices,
            average: Math.round(value.numLines / value.numInvoices)
        }
        resultArray.push(newRecord)
    }
    return resultArray
}

export const manageFilterContacts = async (tokenSet) => {
    const tenantData = await getConnections(tokenSet.access_token)
    if (!tenantData) return null
    const contacts = await getContactsFilter(tokenSet.access_token, tenantData.tenantId)
    const invoices = await getAllInvoices(tokenSet.access_token, tenantData.tenantId)
    invoices.forEach(item => {
        //console.log(item)
        const contactId = item.Contact.ContactID
        const lines = item.LineItems.length
        const dueDate = item.DueDateString || item.DateString
        if (!dueDate) return
        const year = parseInt(dueDate.split('-')[0])
        const contactRecord = contacts.get(contactId)
        if (!contactRecord) return
        let latest = false
        if (year > 2021) {
            latest = true
        }
        let linesRecords = contactRecord.numLines || 0
        linesRecords += lines
        const numInvoices = (contactRecord.numInvoices || 0) + 1
        const newRecord = {
            latest,
            name: contactRecord.name,
            numInvoices,
            numLines: linesRecords
        }
        contacts.set(contactId, newRecord)
    })
    return setData(contacts)
}
