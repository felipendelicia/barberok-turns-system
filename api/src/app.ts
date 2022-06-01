// Import modules

import express, { json, urlencoded } from "express"
import morgan from "morgan"
import cors from "cors"

// Import Routes 

import turnsRoutes from "./routes/turns.routes"

// Init app with express

const app = express()

// App settings

app.set("port", 3000)

// App middlewares

app.use(morgan("dev"))
app.use(json())
app.use(urlencoded({extended:false}))
app.use(cors())

// App routes

app.use(turnsRoutes)

// Export App

export default app