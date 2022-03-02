import {useState} from "react"
import {sessionCookie} from "../utils/cookies/cookies"
import {getContacts, getContactsFiltered} from "../utils/RequestApi/calls"
import useAlerts from "./useAlerts"
import useLogout from "./useLogout"

const useContacts = () => {
    const [ contactsData, setContactsData ] = useState({})
    const [ contactsFilteredData, setContactsFilteredData ] = useState(null)
    const { logout } = useLogout()
    const { errorAlert } = useAlerts()
    const setContacts = async () => {
        const data = await getContacts(sessionCookie())
        if (data && data.Contacts){
            setContactsData({})
            setContactsData(data)
        }else {
            errorAlert('Error during getting contacts')
            logout()
        }
    }
    const setContactsFiltered = async () => {
        const data = await getContactsFiltered(sessionCookie())
        if (data) {
            setContactsFilteredData(data.data)
        }else {
            errorAlert('Error during getting contacts')
            logout()
        }
    }
    return {
        contactsData,
        setContactsFiltered,
        contactsFilteredData,
        setContacts
    }
}

export default useContacts
