const mongoose = require('mongoose');
const {Schema} = mongoose;

// Esquema para Productos
const productoSchema = new Schema({
  nombre: {type: String, required: true},
  descripcion: {type: String},
  precio: {type: Number, required: true},
  disponible: {type: Boolean, default: true},
});

// Modelo para Productos
module.exports = mongoose.model('Producto', productoSchema);
