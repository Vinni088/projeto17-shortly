import { Router } from "express"
import { signUp, signIn, usersMe, ranking } from "../controllers/users.controller.js"

const usersRouter = Router();

usersRouter.post("/signup", signUp);
usersRouter.post("/signin", signIn);
usersRouter.get("/users/me", usersMe);
usersRouter.get("/ranking", ranking);

export default usersRouter