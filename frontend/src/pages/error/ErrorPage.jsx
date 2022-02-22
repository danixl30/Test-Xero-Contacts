import {useEffect} from "react"
import { useNavigate, useParams } from "react-router-dom"
import useAlerts from "../../hooks/useAlerts"
import {deleteSessionCookie, sessionCookie} from "../../utils/cookies/cookies"

export default function ErrorPage() {
    const navigate = useNavigate() 
    const { authid } = useParams()
    const { errorAlert } = useAlerts()
    useEffect(() => {
        if (authid === sessionCookie()){
            errorAlert('Error on login')
            deleteSessionCookie()
        }
        navigate('/')
    }, [])
    return(
        <></>
    )
}
