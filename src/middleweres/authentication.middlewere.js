const authenticationMiddlewere = (req, res, next) => {

    const authorization = req.headers['authorization'];
    if (!authorization) {
        return res
            .status(401)
            .json({
                seccsse: false,
                msg: 'Falta la cabecera de Autorizacion',
            })
    }
    next();
};

export default authenticationMiddlewere;