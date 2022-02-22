import { useEffect } from "react"
import {Title, Divider, Grid, Center, Button, SimpleGrid} from "@mantine/core"
import {useNavigate} from "react-router-dom"
import useOrganization from "../../hooks/useOrganization"
import {sessionCookie} from "../../utils/cookies/cookies"
import PaperDefault from "../../components/PaperDefault"
import TextWhite from "../../components/TextWhite"

export default function OrganizationPage() {
    const navigate = useNavigate()
    const { organizationData, getOrganizationData } = useOrganization()
    useEffect(() => {
        if (!sessionCookie())
            navigate('/')
        getOrganizationData()
    }, [])
    const onClickGoBack = () => {
        navigate(-1)
    }
    return (
        <>
            <Title>Organization</Title>
            <Divider style = {{padding: 20}}/>
            <Grid>
                {organizationData 
                        && organizationData.Organisations
                        && organizationData.Organisations.map(e => 
                    <Grid.Col span = {6}>
                        <PaperDefault>
                            <Center>
                                <SimpleGrid>
                                    <TextWhite>{e.Name}</TextWhite>
                                    <Center>
                                        <TextWhite>{e.OrganisationType}</TextWhite>
                                    </Center>
                                    <Center>
                                        <TextWhite>{e.BaseCurrency}</TextWhite>
                                    </Center>
                                    <Center>
                                        <TextWhite>{e.OrganisationStatus}</TextWhite>
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
