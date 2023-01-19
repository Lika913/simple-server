import express, { Request, Response, NextFunction } from "express"

const userRouter = express.Router()

userRouter.use((req, res, next) => {
    console.log("обработчик на users")
    next()
})

userRouter.get("/login", (req, res) => {
    res.send("login")
})

userRouter.get("/register", (req, res) => {
    res.send("register")
})

export { userRouter } 