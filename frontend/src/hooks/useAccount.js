import {useState} from "react"
import {sessionCookie} from "../utils/cookies/cookies"
import {getAccount} from "../utils/RequestApi/calls"
import useAlerts from "./useAlerts"
import useLogout from "./useLogout"

const useAccount = () => {
    const [ accountData, setAccountData ] = useState({})
    const { logout } = useLogout()
    const { errorAlert } = useAlerts()
    const setAccount = async () => {
        const data = await getAccount(sessionCookie())
        if (data && data.Accounts){
            setAccountData(data)
        }else {
            errorAlert('Error during getting accounts')
            logout()
        }
    }

    return {
        accountData,
        setAccount
    }
}

export default useAccount
