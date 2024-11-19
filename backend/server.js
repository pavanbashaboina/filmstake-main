import express from "express"
import "dotenv/config"
import cors from "cors"
import errorMiddleware from "./middleware/error.js"
import userRoutes from "./routes/userRoutes.js"
import mongoose from "mongoose"
import { setupAdmin } from "./admin/adminIndex.js"

const app = express()

mongoose.connect(process.env.MONGODB_URL).then((data) => {
    console.log(data.connection.host)
})

app.use(express.json())
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))

//adminJS setup
setupAdmin(app)

//routes
app.use("/api/v1", userRoutes)

//middleware
app.use(errorMiddleware)

//server
app.listen(process.env.PORT, () => {
    console.log(`server started at ${process.env.PORT}`)
})