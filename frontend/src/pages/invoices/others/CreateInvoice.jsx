import {Button, Center, NumberInput, Select, Space, TextInput} from "@mantine/core"
import {useEffect, useState} from "react"
import ModalLayout from "../../../components/ModalLayout"
import useAccount from "../../../hooks/useAccount"
import useContacts from "../../../hooks/useContacts"
import useForm from "../../../hooks/useForm"
import useInvoices from "../../../hooks/useInvoices"

const DESCRIPTION = "DESCRIPTION"
const ACCOUNT_CODE = "ACCOUNT_CODE"
const QUANTITY = "QUANTITY"
const AMOUNT = "AMOUNT"
const CONTACT = "CONTACT"

const extractNameContact = e => {
    const newObj = {
        label: e.Name,
        value: e.ContactID
    }
    return newObj
}

const extractNameAccount = e => {
    const newObj = {
        label: e.Name,
        value: e.Code
    }
    return newObj
}

export default function CreateInvoice(props) {
    const [ contactItems, setContactItems ] = useState([])
    const [ accountItems, setAccountItems] = useState([])
    const { getField, setField } = useForm()
    const { contactsData, setContacts } = useContacts()
    const { accountData, setAccount } = useAccount()
    const { acctionCreateInvoice } = useInvoices()
    const onSubmit = async () => {
        if (
            getField(AMOUNT)
            && getField(DESCRIPTION)
            && getField(QUANTITY)
            && getField(CONTACT)
            && getField(ACCOUNT_CODE)
        ) {
            acctionCreateInvoice(
                getField(DESCRIPTION),
                getField(CONTACT),
                getField(QUANTITY),
                getField(AMOUNT),
                getField(ACCOUNT_CODE)
            )
        }
    }
    useEffect(() => {
        setContacts()
        setAccount()
    }, [])
    useEffect(() => {
        if (contactsData.Contacts) {
            setContactItems(contactsData.Contacts.map(extractNameContact))
        }
    }, [contactsData])
    useEffect(() => {
        if (accountData.Accounts) {
            setAccountItems(accountData.Accounts.map(extractNameAccount))
        }
    }, [accountData])
    return (
        <>
            <ModalLayout title = {"Create invoice"} open = {props.open} onClose = {props.onClose}>
                <TextInput
                    label = "Description"
                    name = {DESCRIPTION} 
                    value = {getField(DESCRIPTION) || ""} 
                    placeholder="Description"
                    onChange = { e => setField(e.target.name, e.target.value) }
                />
                <Space h = "xs"/>
                <NumberInput 
                    label = "Quantity"
                    value = {parseFloat(getField(QUANTITY)) || 0}
                    onChange = {num => setField(QUANTITY, num.toString())}
                    placeholder="Quantity" 
                    defaultValue = {0}
                />
                <Space h = "xs"/>
                <TextInput
                    label = "Amount"
                    name = {AMOUNT} 
                    value = {getField(AMOUNT) || ""} 
                    placeholder="Amount"
                    onChange = { e => setField(e.target.name, e.target.value) }
                />
                <Space h = "xs"/>
                <Select 
                    label = "Select a contact"
                    placeholder="Pick one"
                    data = {contactItems}
                    onChange = {e => setField(CONTACT, e)}
                />
                <Select 
                    label = "Select an account"
                    placeholder="Pick one"
                    data = {accountItems}
                    onChange = {e => setField(ACCOUNT_CODE, e)}
                />
                <Space h = "md"/>
                <Center>
                    <Button 
                        onClick = {onSubmit}
                        disabled = {!getField(ACCOUNT_CODE) 
                            || !getField(AMOUNT)
                            || !getField(QUANTITY)
                            || !getField(DESCRIPTION)
                            || !getField(CONTACT)
                        }
                    >Create</Button>
                </Center>
            </ModalLayout>
        </>
    )
}
