import express, { Request, Response } from "express"
import Sender from "./sender"

const sender = new Sender()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/status", (req: Request, res: Response) => {
    //
})

app.post("/send", async (req: Request, res: Response) => {
    const { number, message } = req.body

    //const onlyNumber = number.replace(/[^0-9]+/g, "");

    try {
        await sender.sendText(number, message)

        res.status(200).json("message enviado")
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: "error", message: error })
    }
})

app.listen(5500, () =>{
    console.log("Server Started")
})

