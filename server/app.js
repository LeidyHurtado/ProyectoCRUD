const express = require('express');
const cors = require('cors');
const app = express();


// declarar rutas de la api
const tareaRutas = require('../rutas/tareaRuta')

// middlewares
app.use(express.json());
app.use(cors());


//consumo de las rutas 
app.use('/api', tareaRutas)

module.exports= app;