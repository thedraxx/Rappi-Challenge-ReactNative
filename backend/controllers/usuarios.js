const {response, request} = require('express');
const Producto = require('../models/rappiModel');

const usuariosGet = async (req = request, res = response) => {
  const {q, nombre = 'No name', apikey, page = 1, limit} = req.query;

  try {
    // Busca los productos en la base de datos
    const productos = await Producto.find();

    // Devuelve los productos encontrados como respuesta
    res.json({
      msg: 'get API - controlador',
      q,
      nombre,
      apikey,
      page,
      limit,
      productos,
    });
  } catch (error) {
    // Maneja los errores
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};

const usuariosPost = (req, res = response) => {
  const {nombre, descripcion, precio, disponible} = req.body;
  const producto = new Producto({nombre, descripcion, precio, disponible});

  producto.save();

  res.json({
    msg: 'post API - usuariosPost',
    producto,
  });
};

const usuariosPut = (req, res = response) => {
  const {id} = req.params;

  res.json({
    msg: 'put API - usuariosPut',
    id,
  });
};

const usuariosPatch = (req, res = response) => {
  res.json({
    msg: 'patch API - usuariosPatch',
  });
};

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: 'delete API - usuariosDelete',
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
};
