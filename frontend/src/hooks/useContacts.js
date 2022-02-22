import {useState} from "react"
import {sessionCookie} from "../utils/cookies/cookies"
import {getContacts} from "../utils/RequestApi/calls"
import useAlerts from "./useAlerts"
import useLogout from "./useLogout"

const useContacts = () => {
    const [ contactsData, setContactsData ] = useState({})
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
    return {
        contactsData,
        setContacts
    }
}

export default useContacts
