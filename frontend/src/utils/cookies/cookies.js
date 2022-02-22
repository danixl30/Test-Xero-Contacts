import jsCookie from "js-cookie"

const authId = 'authid'

export const sessionCookie = () => {
    return jsCookie.get(authId)
}

export const setSessionCookie = (value) => {
    jsCookie.set(authId, value)
}

export const deleteSessionCookie = () => {
    jsCookie.remove(authId)
}
