import axios from "axios"
import {xeroError} from "../../error/errors.js"

export const getAccounts = async (token, tenantId) => {
    try {
        const resp = await axios.get('https://api.xero.com/api.xro/2.0/Accounts', {
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

