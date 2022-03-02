import axios from "axios"
import {xeroError} from "../../error/errors.js"

export const getInvoices = async (token, tenantId) => {
    try {
        const resp = await axios.get('https://api.xero.com/api.xro/2.0/Invoices', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Xero-tenant-id': tenantId
            },               
        });
        return resp.data
    }catch (e) {
        console.log(e)
        throw xeroError() 
    }
}

export const getInvoicesByPage = async (token, tenantId, numPage) => {
    try {
        const resp = await axios.get('https://api.xero.com/api.xro/2.0/Invoices?page=' + numPage, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Xero-tenant-id': tenantId
            },               
        });
        return resp.data
    }catch (e) {
        console.log(e)
        throw xeroError() 
    }
}

export const createInvoice = async (token, tenantId, contactId, description, quantity, amount, accountCode) => {
    console.log('here')
    try {
        const res = await axios.post('https://api.xero.com/api.xro/2.0/Invoices', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Xero-tenant-id': tenantId
            },
            'Type': 'ACCREC',
            'Contact': {
                'ContactID': contactId
            },
            "LineItems": [
                {
                    "Description": description,
                    "Quantity": quantity,
                    "UnitAmount": amount,
                    "AccountCode": accountCode
                }
            ],
            "Status": "AUTHORISED"
        })
        console.log(res.data)
        return res.data
    }catch (e) {
        console.log(e)
        throw xeroError()
    }
}

