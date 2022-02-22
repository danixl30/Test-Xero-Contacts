import {Title, Divider, Center, Button} from "@mantine/core"
import {useEffect} from "react"
import {useNavigate} from "react-router-dom"
import {sessionCookie} from "../../utils/cookies/cookies"
import MenuHome from "./Components/menu"
import useOrganization from "../../hooks/useOrganization"
import useLogout from "../../hooks/useLogout"
import useAlerts from "../../hooks/useAlerts"

export default function Home() {
    const navigate = useNavigate()
    const { organizationData, getOrganizationData } = useOrganization()
    const { normalAlert } = useAlerts()
    const { logout } = useLogout()
    useEffect(() => {
        if (!sessionCookie())
            navigate('/')
        normalAlert('Welcome!!!')
        getOrganizationData()
    }, [])
    const onClickLogout = () => {
        normalAlert('Thanks!!!')
        logout() 
    }
    return(
        <>
            <Title order = {1}>Home</Title>
            {organizationData.Organisations &&
                <Title order = {3}>{organizationData.Organisations[0].Name}</Title>
            }
            <Divider style = {{padding: 20}}/>
            <MenuHome/>
            <Divider style = {{padding: 20}}/>
            <Center>
                <Button onClick = {onClickLogout}>Logout</Button>
            </Center>
        </>
    )
}
