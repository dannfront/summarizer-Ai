import express, { Router } from "express"
import { rateLimit } from "express-rate-limit"
import cors from "cors"
interface Options {
    port: number
}
class Server {
    private port
    private app = express()
    constructor(options: Options) {
        const { port } = options
        this.port = port
        this.configure()
    }

    private configure() {
        const limit = rateLimit({
            windowMs: 60 * 60 * 100,
            limit: 15,
            skipFailedRequests: false,
            message: "Request limit reached"
        })
        this.app.use(cors())
        this.app.use(limit)
        this.app.use(express.json())
        // this.app.use(express.urlencoded())
    }

    setRoutes(router: Router) {
        this.app.use(router)

        //todo errors de rutas
    }

    start() {
        this.app.listen(this.port, () => console.log("server started"))
    }
}

export default Server