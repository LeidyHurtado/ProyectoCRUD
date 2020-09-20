const express = require('express');
const TareaControl = require('../control/tareaControl');

var api = express.Router();

// ruta agregar tareas
api.post('/', TareaControl.crearTarea);

// ruta consultar tareas 
api.get('/', TareaControl.obtenerTarea);

// ruta actualizar tareas 
api.put('/:id', TareaControl.actualizarTarea);

// ruta eliminar tareas 
api.delete('/:id', TareaControl.eliminarTarea);

module.exports= api;