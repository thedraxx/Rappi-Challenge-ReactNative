const mongoose = require('mongoose');
const {Schema} = mongoose;

// Esquema para Productos
const productoSchema = new Schema({
  tipo: {
    type: String,
    required: true,
    enum: ['mascota', 'comida', 'fiesta', 'regalo', 'soporte', 'bebidas'],
  },
  nombre: {type: String, required: true},
  precio: {type: Number, required: true},
  disponible: {type: Boolean, default: true},
});

const productoDetalleSchema = new Schema({
  tipo: {
    type: String,
    required: true,
    enum: ['mascota', 'comida', 'fiesta', 'regalo', 'soporte', 'bebidas'],
  },
  nombre: {type: String, required: true},
  descripcion: {type: String},
  cantidad: {type: Number, required: true},
  precio: {type: Number, required: true},
  disponible: {type: Boolean, default: true},
  imagen: {type: String},
});

// Exportamos los modelos
module.exports = {
  Producto: mongoose.model('Productos', productoSchema),
  ProductoDetalle: mongoose.model('ProductoDetalle', productoDetalleSchema),
};
