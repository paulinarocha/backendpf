import express from 'express';
import { createServer } from 'http';
import authenticationRouter from './routes/authentication.route.js';
import hotelRouter from './routes/hotel.route.js';
import authenticationMiddlewere from './middleweres/authentication.middlewere.js';

function main() {
    const app = express();
    const port = 4000;

    app.use(express.json());
    app.use(authenticationMiddlewere);
    app.use('/hotel', hotelRouter);
    app.use('/auth', authenticationRouter);


    app.get("/", (req, res) => {
        res.send("hola mundo")
    })


    /*app.listen(port, () => {
        console.log("esta corriendo yyyy ", port)
    })*/

    const httpserve = createServer(app);
    httpserve.listen(port, () => {
        console.log("esta corriendo yyyy ", port)
    })
}

main();













