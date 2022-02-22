 const cache = new Map()

export const getTokenData = (key) => {
    return cache.get(key)
}

export const setTokenData = (key, value) => {
    cache.set(key, value)
}

export const deleteTokenData = (key) => {
    cache.delete(key)
}
