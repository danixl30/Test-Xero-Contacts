import {Title} from "@mantine/core"
import {useEffect} from "react"
import { useNavigate } from "react-router-dom"
import CenterVerticalLayout from "../../components/CenterVerticalLayout"
import XeroButton from "../../components/XeroButton"
import {sessionCookie} from "../../utils/cookies/cookies"
import useLoginXero from "./hooks/useLoginXero"

const RootPage = () => {
    const { onClickXeroButton } = useLoginXero()
    const navigate = useNavigate()
    useEffect(() => {
        if (sessionCookie())
            navigate('/home')
    }, [])
    return(
        <>
            <CenterVerticalLayout>
                <Title order = {1}>Login with Xero</Title>
                <XeroButton onClick = {onClickXeroButton}/>
            </CenterVerticalLayout>
        </>
    )
}

export default RootPage
