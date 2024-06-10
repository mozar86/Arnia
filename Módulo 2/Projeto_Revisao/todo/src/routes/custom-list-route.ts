import { Router } from "express";
import { createCustomListCotroller } from "../controllers/custom-list-controller";
import { storageMiddleware } from "../middlewares/storage-middleware";

const customListRoutes = Router()

customListRoutes.post("/:user", storageMiddleware.single("imageBanner"), createCustomListCotroller)

export { customListRoutes }