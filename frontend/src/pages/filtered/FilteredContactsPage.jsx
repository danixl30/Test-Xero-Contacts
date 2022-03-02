import {Center, Title, SimpleGrid, Divider, Grid, Button, Text} from "@mantine/core"
import {useEffect} from "react"
import {useNavigate} from "react-router-dom"
import PaperDefault from "../../components/PaperDefault"
import TextWhite from "../../components/TextWhite"
import useContacts from "../../hooks/useContacts"
import {sessionCookie} from "../../utils/cookies/cookies"

export default function FilteredContactsPage() {
    const navigate = useNavigate()
    const { contactsFilteredData, setContactsFiltered } = useContacts()
    useEffect(() => {
        if (!sessionCookie())
            navigate('/')
        setContactsFiltered()
    }, [])
    const onClickGoBack = () => {
        navigate(-1)
    }
    return (
        <>
            <Title>Contacs Filtered</Title>
            <Divider style = {{padding: 20}}/>
            {!contactsFilteredData && <Text style = {{padding: 20}}>Retriving data...</Text>}
            <Grid>
                {contactsFilteredData && contactsFilteredData.map(e => 
                    <Grid.Col span = {6}>
                        <PaperDefault>
                            <Center>
                                <SimpleGrid>
                                    <Center>
                                        <TextWhite>Name: {e.name}</TextWhite>
                                    </Center>
                                    <Center>
                                        <TextWhite>Number of invoices: {e.numInvoices}</TextWhite>
                                    </Center>
                                    <Center>
                                        <TextWhite>Average of lines: {e.average}</TextWhite>
                                    </Center>
                                    {e.latest &&                                     
                                        <Center>
                                            <TextWhite>Latest</TextWhite>
                                        </Center>
                                    }
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
