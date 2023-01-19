import { Response, Router } from "express"
import { LoggerService } from "../../logger/logger"
import { IControllerRoute } from "./controller_route_interface"

export abstract class BaseController {
    private readonly _router
    private logger

    constructor(logger: LoggerService) {
        this.logger = logger
        this._router = Router()
    }

    get router() {
        return this._router
    }

    send<T>(res: Response, code: number, message: T) {
        res.type("application/json")
        return res.status(code).send(message)
    }

    ok<T>(res: Response, code: number, message: T) {
        return this.send<T>(res, 200, message)
    }

    protected bind(routes: IControllerRoute[]) {
        for (const route of routes) {
            this.logger.log(`[${route.method}] ${route.path}`)

            const handler = route.func.bind(this)
            this.router[route.method](route.path, handler)
        }
    } 
}