import  Router  from "express-promise-router";
import { signin, profile, signout, signup } from "../controllers/auth.controller.js";
import { isAuth } from "../middlewares/auth.middleware.js";

const router = Router();

router.post('/signin', signin);

router.post('/signup', signup);

router.post('/signout', signout);

router.get('/profile', isAuth, profile);

export default router; //Por default solo se puede importar una variable por archivo