import express from "express"
import cors from "cors"

import xeroAuthRouter from "./xero/auth/xero.auth.router.js"
import xeroApiRouter from './xero/api/router/xero.api.router.js'

import {errorMiddleware} from "./error/errorMiddleware.js"
import { authMiddleware } from "./auth/auth.middleware.js"

const app = express()

app.use(express.json())
app.use(cors())

app.use("/xero/auth", xeroAuthRouter)
app.use("/xero/api", authMiddleware, xeroApiRouter)

app.use(errorMiddleware)

export default app
