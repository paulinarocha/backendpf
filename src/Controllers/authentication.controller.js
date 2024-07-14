
let users = [];

export const login = (req, res) => {
    const {
        email,
        password,
    } = req.body;

    if (!email || !password) {
        return res
            .status(401)
            .json({
                success: false,
                msg: "los datos no estan registrados",
            })
    }

    const existentedUser = users.find(user => user.email === email);
    if (!existentedUser) {
        return res
            .status(401)
            .json({
                success: false,
                msg: "Usuario no existe"
            })
    }
    if (existentedUser.password !== password) {
        return res
            .status(401)
            .json({
                success: false,
                msg: "La contraseña es incorrecta"
            })
    }

    return res
        .status(200)
        .json({
            success: true,
            data: {
                ...existentedUser
            },
        })
}


// funcion de registro
export const registro = (req, res) => {
    const obj = req.body;
    if (!obj.nombre || !obj.email || !obj.password) {
        return res
            .status(400)
            .json({
                success: false,
                msg: "falta informacion de registro"
            })
    }

    const existentedUser = users.find(user => user.email === obj.email);

    if (existentedUser) {
        return res
            .status(400)
            .json({
                success: false,
                msg: "El usuario ya esta registrado"
            });
    }

    users.push({
        nombre: obj.nombre,
        email: obj.email,
        password: obj.password,

    })

    return res
        .status(201)
        .json({
            success: true,
            msg: "Registro exitoso"
        });
}