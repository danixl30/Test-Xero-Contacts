import { useEffect } from "react"
import {Title, Divider, Grid, Center, Button, SimpleGrid} from "@mantine/core"
import {sessionCookie} from "../../utils/cookies/cookies"
import { useNavigate } from "react-router-dom"
import useContacts from "../../hooks/useContacts"
import PaperDefault from "../../components/PaperDefault"
import TextWhite from "../../components/TextWhite"

export default function ContactsPage(){
    const navigate = useNavigate()
    const { contactsData, setContacts } = useContacts()
    useEffect(() => {
        if (!sessionCookie())
            navigate('/')
        setContacts()
    }, [])
    const onClickGoBack = () => {
        navigate(-1)
    }
    return (
        <>
            <Title>Contacs</Title>
            <Divider style = {{padding: 20}}/>
            <Grid>
                {contactsData && contactsData.Contacts && contactsData.Contacts.map(e => 
                    <Grid.Col span = {6}>
                        <PaperDefault>
                            <Center>
                                <SimpleGrid>
                                    <TextWhite>Name: {e.Name}</TextWhite>
                                    <Center>
                                        <TextWhite>Status: {e.ContactStatus}</TextWhite>
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

