import {Router, Request, Response} from "express"
import colors from "colors/safe"

const router = Router()

router.get("/", (req: Request,res: Response)=>{
    res.send("hola")
})

export default router