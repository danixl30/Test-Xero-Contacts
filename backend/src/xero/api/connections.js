import axios from "axios"
import {xeroError} from "../../error/errors.js"

export const getConnections = async (token) => {
    try {
        const resp = await axios.get('https://api.xero.com/connections', {
            headers: {
                'Authorization': `Bearer ${token}`,
            },               
        });
        return resp.data[0]
    }catch (e) {
        console.log(e)
        throw xeroError() 
    }
}

export const deleteConnections = async (token, id) => {
    const resp = await axios.delete('https://api.xero.com/connections/' + id, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },               
    });
}

