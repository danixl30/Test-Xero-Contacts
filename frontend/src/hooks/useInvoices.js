import {useState} from "react"
import {sessionCookie} from "../utils/cookies/cookies"
import {createInvoice, getInvoices} from "../utils/RequestApi/calls"
import useAlerts from "./useAlerts"
import useLogout from "./useLogout"

const useInvoices = () => {
    const [ invoicesData, setInvoicesData ] = useState({})
    const { logout } = useLogout()
    const { errorAlert, successAlert } = useAlerts()
    const setInvoices = async () => {
        const data = await getInvoices(sessionCookie())
        if (data && data.Invoices){
            setInvoicesData(data)
        }else {
            errorAlert('Error during getting invoices')
            logout()
        }
    }
    const acctionCreateInvoice = async (description, contactId, quantity, amount, accountCode) => {
        const body = {
            description,
            contactId, 
            quantity,
            accountCode,
            amount
        }
        const data = await createInvoice(sessionCookie(), body)
        if (!data) {
            errorAlert('Error during creating the invoice')
        }else {
            successAlert('Invoice created')
        }
    }
    return {
        invoicesData,
        setInvoices,
        acctionCreateInvoice
    }
}

export default useInvoices
