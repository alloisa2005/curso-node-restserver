const { response } = require('express');

const usuariosPost = (req, res = response) => {

    const { nombre, edad } = req.body;
    //console.log(body);

    res.json({
        msg: 'Post API - Controller',
        nombre,
        edad
    });
}

const usuariosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'Put API - Controller',
        id
    });
}

const usuariosGet = (req, res = response) => {

    const query = req.query;

    res.json({
        msg: 'Get API - Controller'
    });
}

const usuariosDelete = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'Delete API - Controller',
        id
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'Patch API - Controller'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}