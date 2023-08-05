import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { signUpSchema, signInSchema } from "../schemas/users.schemas.js";
import { signUp, signIn, usersMe, ranking } from "../controllers/users.controller.js";

const usersRouter = Router();

usersRouter.post("/signup", validateSchema(signUpSchema), signUp);
usersRouter.post("/signin", validateSchema(signInSchema), signIn);
usersRouter.get("/users/me", usersMe);
usersRouter.get("/ranking", ranking);

export default usersRouter