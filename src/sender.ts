import { start } from "repl"
import { create, Whatsapp, Message, SocketState } from "venom-bot"

class Sender {
    private client: Whatsapp
 
    constructor() {
        this.initialize()
    }

    async sendText(to: string, body: string) {
        this.client.sendText(to, body)
    }

    private initialize() {
        const qr = (base64Qrimg: string) => {
            
        }

        const status = (statusSession: string) => {}

        const start = (client: Whatsapp) => {
            this.client = client

            //example to send message after starting the client
            //this.sendText("5592********@c.us", "Hi..!, this is a test")
        }

        create("ws-sender-dev", qr, status)
            .then((client) => start(client))
            .catch((error) => console.error(error))
    }
}

export default Sender