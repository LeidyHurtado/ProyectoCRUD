const Tarea = require('../modelo/tareas')

// crear tarea 
function crearTarea(req, res){
    var tarea = new Tarea();
    var parametros = req.body;

    tarea.nombreEncargado = parametros.nombreEncargado;
    tarea.descripcionTarea = parametros.descripcionTarea;
    tarea.estado = parametros.estado;

    tarea.save((err, tareaNueva)=>{
        if (err){
            res.status(500).send({message:"Error del servidor"});
        }else {
            if(!tareaNueva){
                res.status(200).send({message:"no fue posible registro tarea"})
            }else {
                res.status(200).send({
                    status: 'Tarea creada',
                    tarea: tareaNueva
                });
            }
        }
    })
}

// obtener tarea
function obtenerTarea(req, res){
    Tarea.find((err, tareasEncontradas)=>{
        if (err){
            res.status(500).send({message:"Error del servidor"});
        }else {
            if(!tareasEncontradas){
                res.status(200).send({message:"no fue posible encontrar la tarea"})
            }else {
                res.status(200).send({
                    status: 'Tareas Encontradas',
                    tarea: tareasEncontradas
                });
            }
        }


    })
}

// actualizar tarea 
function actualizarTarea(req, res){
    var tareaId = req.params.id;
    var nuevosDatosTarea = req.body;

    Tarea.findByIdAndUpdate(tareaId, nuevosDatosTarea,(err, tareaActualizada)=>{
        if (err){
            res.status(500).send({message:"Error del servidor"});
        }else {
            if(!tareaActualizada){
                res.status(200).send({message:"no fue posible actualizar la tarea"})
            }else {
                res.status(200).send({
                    status: 'Tarea Actualizada',
                    tarea: nuevosDatosTarea
                });
            }
        } 
    })
}


// eliminar Tarea
function eliminarTarea(req, res){
    var tareaId = req.params.id;

    Tarea.findByIdAndDelete(tareaId, (err, tareaEliminada)=>{
        if (err){
            res.status(500).send({message:"Error del servidor"});
        }else {
            if(!tareaEliminada){
                res.status(404).send({message:"no fue posible eliminar la tarea"})
            }else {
                res.status(200).send({
                    status: 'Tarea Eliminada',
                    tarea: tareaEliminada
                });
            }
        } 


    })
}



// exportar funciones 

module.exports = {
    crearTarea,
    obtenerTarea,
    actualizarTarea,
    eliminarTarea
}

