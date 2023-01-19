import { App } from "./app"
import { UserController } from "./controllers/user/user_controller"
import { LoggerService } from "./logger/logger"

const bootstrap = async () => {
    const logger = new LoggerService()
    const app = new App(logger, new UserController(logger))
    await app.init()
}

bootstrap()