import { Router } from "express";
import { urlShorten, urlId, urlOpen, deleteUrlId } from "../controllers/urls.controller.js";

const urlsRouter = Router();

urlsRouter.post("/urls/shorten", urlShorten);
urlsRouter.get("/urls/:id", urlId);
urlsRouter.get("/urls/open/:shortUrl", urlOpen);
urlsRouter.delete("/urls/urls/:id", deleteUrlId);

export default urlsRouter