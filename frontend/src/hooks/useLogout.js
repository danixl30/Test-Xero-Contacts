import { useNavigate } from "react-router-dom"
import {deleteSessionCookie, sessionCookie} from "../utils/cookies/cookies"
import {logoutApi} from "../utils/RequestApi/calls"

export default function useLogout() {
    const navigate = useNavigate()
    const logout = async () => {
        await logoutApi(sessionCookie())
        deleteSessionCookie()
        navigate('/')
    }
    return {
        logout
    }
}
