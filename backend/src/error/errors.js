
export const unathorizedError = () => {
    const error = new Error('Not authorized')
    error.status = 401
    return error
}

export const xeroError = () => {
    const error = new Error('Error on xero service')
    error.status = 503 
    return error
}

export const xeroTimeOut = () => {
    const error = new Error('Xero time out')
    error.status = 408
    return error
}
