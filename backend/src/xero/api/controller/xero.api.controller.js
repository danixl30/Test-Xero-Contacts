import {manageOrganisationData} from "../../../useCases/organisation.use.case.js"
import {manageAccountsData} from "../../../useCases/accounts.use.case.js"
import {manageContactsData} from "../../../useCases/contacts.use.case.js"
import {manageConnectionData, manageDeleteConnection} from "../../../useCases/connection.use.case.js"
import {manageCreateInvoice, manageInvoicesData} from "../../../useCases/invoice.use.case.js"
import expressAsyncHandler from "express-async-handler"
import {manageFilterContacts} from "../../../useCases/filter.contacts.use.case.js"

export const getConnections = expressAsyncHandler(async (req, res) => {
    const data = await manageConnectionData(req.tokenSet)
    res.json(data)
})

export const getContacs = expressAsyncHandler(async (req, res) => {
    const data = await manageContactsData(req.tokenSet)
    res.json(data)
})

export const getInvoices = expressAsyncHandler(async (req, res) => {
    const data = await manageInvoicesData(req.tokenSet)
    res.json(data)
})

export const getAccounts = expressAsyncHandler(async (req, res) => {
    const data = await manageAccountsData(req.tokenSet)
    res.json(data)
})

export const createInvoice = expressAsyncHandler(async (req, res) => {
    const data = await manageCreateInvoice(req.tokenSet, req.body)
    res.json(data)
})

export const getOrganization = expressAsyncHandler(async (req, res) => {
    const data = await manageOrganisationData(req.tokenSet)
    res.json(data)
})

export const deleteConnection = expressAsyncHandler(async (req, res) => {
    await manageDeleteConnection(req.headers.authid, req.tokenSet)
    res.json({ message: 'ok' })
})

export const filterContacts = expressAsyncHandler(async (req, res) => {
    const data = await manageFilterContacts(req.tokenSet)
    res.json({ message: 'ok', data })
})
