import axios from "axios"

const baseUrl = "http://localhost:4000"

export const getXeroUrl = async () => {
    try{
        const data = await axios.get(baseUrl + '/xero/auth/consert-url')
        return data.data
    }catch(e) {
        console.log(e)
        return null
    }
}

export const getOrganization = async (authid) => {
    try {
        const data = await axios.get(baseUrl+'/xero/api/organization', {
            headers: {
                authid
            }
        })
        return data.data
    }catch(e) {
        console.log(e)
        return null
    }
}

export const logoutApi = async (authid) => {
    try {
        const data = await axios.delete(baseUrl+'/xero/api/connection', {
            headers: {
                authid
            }
        })
        return data.data
    }catch(e) {
        console.log(e)
        return null
    }
}

export const getContacts = async (authid) => {
    try {
        const data = await axios.get(baseUrl+'/xero/api/contacts', {
            headers: {
                authid
            }
        })
        return data.data
    }catch(e) {
        console.log(e)
        return null
    }
}

export const getContactsFiltered = async (authid) => {
    try {
        const data = await axios.get(baseUrl+'/xero/api/contacts/filter', {
            headers: {
                authid
            }
        })
        return data.data
    }catch(e) {
        console.log(e)
        return null
    }
}

export const getInvoices = async (authid) => {
    try {
        const data = await axios.get(baseUrl+'/xero/api/invoices', {
            headers: {
                authid
            }
        })
        return data.data
    }catch(e) {
        console.log(e)
        return null
    }
}

export const getAccount = async (authid) => {
    try {
        const data = await axios.get(baseUrl+'/xero/api/accounts', {
            headers: {
                authid
            }
        })
        return data.data
    }catch(e) {
        console.log(e)
        return null
    }
}

export const createInvoice = async (authid, body) => {
    try {
        const data = await axios.post(baseUrl+'/xero/api/invoice', {
            ...body
        }, {
            headers: {
                authid
            },
        })
        return data.data
    }catch(e) {
        console.log(e)
        return null
    }
}
