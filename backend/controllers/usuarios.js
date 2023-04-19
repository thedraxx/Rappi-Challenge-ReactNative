const {response, request} = require('express');
const {Producto, ProductoDetalle} = require('../models/rappiModel');

const usuariosGet = async (req = request, res = response) => {
  try {
    // Busca los productos en la base de datos
    const productos = await ProductoDetalle.find();

    // Devuelve los productos encontrados como respuesta
    res.json({
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

// Función para insertar datos de prueba en la base de datos

const productosSeed = async (req, res = response) => {
  const productos = [
    {
      tipo: 'bebidas',
      nombre: 'Vino Tinto La perdiz',
      precio: 255,
      disponible: true,
    },
    {
      tipo: 'bebidas',
      nombre: 'Vino Blanco La perdiz',
      precio: 289,
      disponible: true,
    },
    {
      tipo: 'bebidas',
      nombre: 'Cerveza Corona',
      precio: 300,
      disponible: true,
    },
  ];

  const productosDetalles = [
    {
      tipo: 'bebidas',
      nombre: 'Vino Tinto La perdiz',
      descripcion: 'Vino tinto de la bodega La perdiz',
      cantidad: 1,
      precio: 255,
      disponible: true,
      imagen:
        'https://http2.mlstatic.com/D_NQ_NP_760032-MLA49587403529_042022-O.jpg',
    },
    {
      tipo: 'bebidas',
      nombre: 'Vino Blnco La perdiz',
      descripcion: 'Vino blanco de la bodega La perdiz',
      cantidad: 1,
      precio: 289,
      disponible: true,
      imagen:
        'https://ardiaprod.vtexassets.com/arquivos/ids/223908/Vino-Blanco-Norton-Cosecha-Tardia-750-Ml-_1.jpg?v=637873493818530000',
    },
    {
      tipo: 'bebidas',
      nombre: 'Cerveza Corona',
      descripcion: 'Cerveza Corona',
      cantidad: 1,
      precio: 300,
      disponible: true,
      imagen:
        'https://d3ugyf2ht6aenh.cloudfront.net/stores/798/865/products/30277395-1220c0f0485e0290ab16635713519832-640-0.webp',
    },
  ];

  try {
    // Elimina todos los documentos de la colección
    await Producto.deleteMany({});
    // Elimina todos los documentos de la colección
    await ProductoDetalle.deleteMany({});

    // Inserta los documentos del arreglo en la base de datos
    await Producto.insertMany(productos);
    // Inserta los documentos del arreglo en la base de datos
    await ProductoDetalle.insertMany(productosDetalles);

    res.json({
      msg: 'Datos de productos insertados en la base de datos',
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
  productosSeed,
};
