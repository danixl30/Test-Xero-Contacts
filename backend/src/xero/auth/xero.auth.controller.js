import expressAsyncHandler from "express-async-handler"
import {getUrl, requestToken} from "./xero.auth.service.js"

export const sendLoginUrl = (_, res) => {
    const consertUrl = getUrl()
    res.json( consertUrl )
}


export const callbackXero = expressAsyncHandler(async (req, res) => {
    const authid = req.query.state
    try {
        await requestToken(req.query)
        res.redirect('http://localhost:3000/home')
    }catch (e) {
        res.redirect('http://localhost:3000/error/' + authid)
    }
})
