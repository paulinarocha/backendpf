import { Router, } from "express";
import { login, registro, } from "../Controllers/authentication.controller.js";

//1. Crear el router
const authenticationRouter = Router();

// Paso 2. Definir rutas
authenticationRouter.post('/login', login);

authenticationRouter.post('/registro', registro);

// Paso 3. Exportar el Router.
export default authenticationRouter;