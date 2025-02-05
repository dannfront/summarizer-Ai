
import { Router } from "express"
import RouterSumarizer from "./sumarizer/sumarizer.routes"


//todo hacer rutas
//todo implementar controller
//todo hacer una peticion


class Routes {
    constructor() {

    }

    static get routes(): Router {
        const app = Router()

        app.use("/summarizer", RouterSumarizer.Router)
        app.use("/health/", () => console.log())


        return app
    }
}

export default Routes