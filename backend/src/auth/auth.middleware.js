import asyncHandler from "express-async-handler"
import {getTokenData} from "../CacheManager/TokenSet/cache.token.js"
import {unathorizedError} from "../error/errors.js"
import {refreshToken} from "../xero/auth/xero.auth.service.js"

const compareTime = (time) => time.getTime() > new Date().getTime()

export const authMiddleware = asyncHandler(async (req, _, next) => {
    const authid = req.headers.authid
    let tokenSet = getTokenData(authid)
    if (!tokenSet)
        throw unathorizedError()
    if (!compareTime(tokenSet.expires_at)) {
        tokenSet = refreshToken(authid, tokenSet)
    }
    req.tokenSet = tokenSet
    next()
})
