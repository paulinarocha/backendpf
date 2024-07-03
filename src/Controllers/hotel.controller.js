
import hoteles from "../bd/hotel.js"

export const getAllhotel = (req, res) => {

    if (!hoteles || hoteles.length <= 0) {
        return res
            .status(404)
            .json({
                success: false,
                msg: "No hay informacion para mostrar",
            })
    }
    return res
        .status(200)
        .json({
            success: true,
            msg: "Todo los hoteles",
            data: [
                ...hoteles,
            ],
        })

}

export const registroHotel = (req, res) => {
    const obj = req.body;

    if (!obj.id || !obj.nombre || !obj.direccion || !obj.clasificacion || !obj.precio || !obj.descripcion) {
        return res
            .status(400)
            .json({
                success: false,
                msg: "falta informacion de registro"
            })
    }

    const existentedhotel = hoteles.find(hotel => hotel.id === obj.id);

    if (existentedhotel) {
        return res
            .status(400)
            .json({
                success: false,
                msg: "El hotel ya esta registrado"
            });
    }

    hoteles.push({
        id: obj.id,
        nombre: obj.nombre,
        direccion: obj.direccion,
        clasificacio: obj.clasificacio,
        precio: obj.precio,
        descripcion: obj.descripcion,

    })

    return res
        .status(201)
        .json({
            success: true,
            msg: "Registro exitoso"
        });

}