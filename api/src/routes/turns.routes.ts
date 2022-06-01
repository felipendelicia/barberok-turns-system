import {Router, Request, Response} from "express"
import database from "../database"
import colors from "colors/safe"

const router = Router()

router.get("/", async (req: Request,res: Response)=>{
    console.log( await (await database()).data.values)
})

export default router