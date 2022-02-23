import { useEffect } from "react"
import {useNavigate} from "react-router-dom";
import useInvoices from "../../hooks/useInvoices";
import {sessionCookie} from "../../utils/cookies/cookies"
import PaperDefault from "../../components/PaperDefault"
import TextWhite from "../../components/TextWhite"
import {Title, Divider, Grid, Center, Button, SimpleGrid} from "@mantine/core"
import useOpenModal from "./hooks/useOpenModal"
import CreateInvoice from "./others/CreateInvoice";

export default function InvoicesPage() {
    const navigate = useNavigate()
    const { invoicesData, setInvoices } = useInvoices()
    const { onOpen, open, onClose } = useOpenModal()
    useEffect(() => {
        if (!sessionCookie())
            navigate('/')
        setInvoices()
    }, [])
    const onClickGoBack = () => {
        navigate(-1)
    }
    const onClickCreate = () => {
        onOpen()
    }
    return (
        <>
            <CreateInvoice open = {open} onClose = {onClose}/>
            <Title>Invoices</Title>
            <Center>
                <Button onClick = {onClickCreate}>Create Invoice</Button>
            </Center>
            <Divider style = {{padding: 20}}/>
            <Grid>
                {invoicesData && invoicesData.Invoices && invoicesData.Invoices.map(e => 
                    <Grid.Col span = {6}>
                        <PaperDefault>
                            <Center>
                                <SimpleGrid>
                                    <TextWhite>Name: {e.Contact.Name}</TextWhite>
                                    <Center>
                                        <TextWhite>Type: {e.Type}</TextWhite>
                                    </Center>
                                    <Center>
                                        <TextWhite>Status: {e.Status}</TextWhite>
                                    </Center>
                                    <Center>
                                        <TextWhite>Total: {e.Total}</TextWhite>
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
