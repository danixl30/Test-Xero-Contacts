import { useEffect } from "react"
import {Title, Divider, Grid, Center, Button, SimpleGrid} from "@mantine/core"
import {useNavigate} from "react-router-dom"
import useAccount from "../../hooks/useAccount"
import {sessionCookie} from "../../utils/cookies/cookies"
import PaperDefault from "../../components/PaperDefault"
import TextWhite from "../../components/TextWhite"

export default function AccountPage(){
    const navigate = useNavigate()
    const { accountData, setAccount } = useAccount()
    useEffect(() => {
        if (!sessionCookie())
            navigate('/')
        setAccount()
    }, [])
    const onClickGoBack = () => {
        navigate(-1)
    }
    return (
        <>
            <Title>Account</Title>
            <Divider style = {{padding: 20}}/>
            <Grid>
                {accountData && accountData.Accounts && accountData.Accounts.map(e => 
                    <Grid.Col span = {6}>
                        <PaperDefault>
                            <Center>
                                <SimpleGrid>
                                    <TextWhite>{e.Name}</TextWhite>
                                    <Center>
                                        <TextWhite>{e.Type}</TextWhite>
                                    </Center>
                                    <Center>
                                        <TextWhite>{e.ConcurrencyCode}</TextWhite>
                                    </Center>
                                    <Center>
                                        <TextWhite>{e.Code}</TextWhite>
                                    </Center>
                                </SimpleGrid>
                            </Center>
                        </PaperDefault>
                    </Grid.Col>
                )}
            </Grid>
            <Divider style = {{padding: 20}}/>
            <Center>
                <Button onClick = {onClickGoBack}>Go back</Button>
            </Center>
        </>
    )
}
