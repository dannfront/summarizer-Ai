import Routes from "./presentation/router";
import Server from "./presentation/server"

(async () => {
    const server = new Server({ port: 3000 })
    server.setRoutes(Routes.routes)
    server.start()
})()
