import {google} from "googleapis"
import config from "./config/config"
import creds from "./config/credentials.json"
import path from "path"

export default async function accessSpreadsheet() {

    const auth = new google.auth.GoogleAuth({
        keyFile:path.join(__dirname,"config","credentials.json"),
        scopes:config.scopes
    })

    const client = await auth.getClient()

    const gSheets = google.sheets({version:"v4", auth:client})

    const metaData = await gSheets.spreadsheets.get({auth:auth, spreadsheetId:config.spreadSheetID})

    const getRows = await gSheets.spreadsheets.values.get({
        auth:auth,
        spreadsheetId:config.spreadSheetID,
        range:"sheets1"
    })

    return getRows
}