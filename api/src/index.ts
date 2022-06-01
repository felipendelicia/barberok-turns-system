import app from "./app"
import colors from "colors/safe"

const startAppCallback = () => {
    console.log(colors.green(`server on port port`))
}

// Connect with the DB

// Start APP
app.listen(3001, startAppCallback)