import { Router } from "express";
import { singUp, singIn } from "../controllers/userRouterLoginCotrollers/loginControllers.js";
import { getindex, getProducts, getProduct  } from "../controllers/userRouterControllers/getUserRoterControllers.js";
import { postProducts } from "../controllers/userRouterControllers/postUserRouterControllers.js";
import { deleteProduct } from "../controllers/userRouterControllers/deleteUserRouterControllers.js";
import { putProduct } from "../controllers/userRouterControllers/putUserControllers.js";
import { checkAuthentication } from "../controllers/middlewares/security.js";
import { cachedAsync } from "../utilities/cachedAsync.js";


const router = Router()

router.post("/singUp", cachedAsync(singUp))
router.post("/singIn", cachedAsync(singIn))
router.get("/index", cachedAsync(getindex))
router.get("/get-products", cachedAsync(getProducts))
router.get("/get-product/:id", cachedAsync(getProduct))
router.post("/post-products", checkAuthentication(),cachedAsync(postProducts))
router.put("/put-product/:id", cachedAsync(putProduct))
router.delete("/delete-product/:id", cachedAsync(deleteProduct))
export {router}