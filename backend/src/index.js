import 'dotenv/config'
import app from "./app.js"

const port = process.env.PORT || 4000

app.listen(port)
console.log("Server started on port "+ port)
