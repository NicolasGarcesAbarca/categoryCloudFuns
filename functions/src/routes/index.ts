import {Router} from "express";
import {productsController} from "../controllers/products";

export const routes = Router()
  .get("/v1/products", productsController);
