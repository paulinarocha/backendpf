import { Router, } from "express";
import { getAllhotel,registroHotel } from "../Controllers/hotel.controller.js";


//1. Crear el router
const hotelRouter = Router();

// Paso 2. Definir rutas
hotelRouter.get('/', getAllhotel);

hotelRouter.post('/registro', registroHotel);

// Paso 3. Exportar el Router.
export default hotelRouter;