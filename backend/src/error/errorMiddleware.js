
export const errorMiddleware = (err, _, res, _n) => {
    if (!err.status){
        err.status = 500
    }
    res.status(err.status).json({ message: err.message })
}
