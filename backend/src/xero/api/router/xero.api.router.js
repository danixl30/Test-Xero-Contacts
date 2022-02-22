import { Router } from "express"
import {createInvoice, deleteConnection, getAccounts, getConnections, getContacs, getInvoices, getOrganization} from "../controller/xero.api.controller.js"

const xeroApiRouter = Router()

xeroApiRouter.get('/connections', getConnections)

xeroApiRouter.get('/contacts', getContacs)

xeroApiRouter.get('/invoices', getInvoices)

xeroApiRouter.get('/accounts', getAccounts)

xeroApiRouter.post('/invoice', createInvoice)

xeroApiRouter.get('/organization', getOrganization)

xeroApiRouter.delete('/connection', deleteConnection)

export default xeroApiRouter
