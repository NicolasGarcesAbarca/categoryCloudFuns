import {Request, Response} from "express";
import {getProducts} from "../services/productService";

export const productsController = async (req: Request, res: Response) => {
  try {
    const data = await getProducts();
    res.status(200).send({data});
  } catch (err) {
    res.status(500).send({message: "error"});
  }
};
