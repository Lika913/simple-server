import { NextFunction, Request, Response } from "express"
import { LoggerService } from "../../logger/logger"
import { BaseController } from "../base/base_controller"
import { IControllerRoute } from "../base/controller_route_interface"

export class UserController extends BaseController {

    constructor(logger: LoggerService) {
        super(logger)

        const routes: IControllerRoute[] = [
            { 
                path: "/login", 
                method: "get", 
                func: this.login
            },
            { 
                path: "/register", 
                method: "get", 
                func: this.register
            }
        ]
        this.bind(routes)
    }

    login(req: Request, res: Response, next: NextFunction) {
        res.send("login")        
    }

    register(req: Request, res: Response, next: NextFunction) {
        res.send("register")
    }
}