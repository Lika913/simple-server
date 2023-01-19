import express, {Express} from "express"
import { Server } from "http"
import { UserController } from "./controllers/user/user_controller"
import { LoggerService } from "./logger/logger"

export class App {
    private app: Express
    private port: number
    private server: Server
    private logger: LoggerService
    private userController: UserController
 
    constructor(
        logger: LoggerService,
        userController: UserController
    ) {
        this.app = express()
        this.port = 7777
        this.logger = logger
        this.userController = userController
    }

    private initRouters = () => {
        this.app.use("/users", this.userController.router)
    }

    init = async() => {
        this.initRouters()
        this.server = this.app.listen(this.port, () => this.logger.log("Сервер запущен"))
    }
} 