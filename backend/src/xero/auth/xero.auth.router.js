import { Router } from "express";
import {callbackXero, sendLoginUrl} from "./xero.auth.controller.js";

const xeroAuthRouter = Router()

xeroAuthRouter.get('/consert-url', sendLoginUrl)

xeroAuthRouter.get('/callback', callbackXero)

export default xeroAuthRouter
