import {useState} from "react"
import { sessionCookie } from "../utils/cookies/cookies"
import { getOrganization } from "../utils/RequestApi/calls"
import useAlerts from "./useAlerts"
import useLogout from "./useLogout"

const useOrganization = () => {
    const [organizationData, setOrganizationData] = useState({})
    const { logout } = useLogout()
    const { errorAlert } = useAlerts()
    const getOrganizationData = async () => {
        setOrganizationData({})
        const data = await getOrganization(sessionCookie())
        if (data && data.Organisations) {
            setOrganizationData(data)
        }else {
            errorAlert('Error during getting organizations')
            logout()
        }
    } 
    return {
        organizationData,
        getOrganizationData
    }
}

export default useOrganization
