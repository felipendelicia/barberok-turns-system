import app from "./app"
import colors from "colors/safe"
import config from "./config/config"

const startAppCallback = () => {
    console.log(colors.green(`server on port ${config.PORT}`))
}

// Connect with the DB

// Start APP
app.listen(config.PORT, startAppCallback)