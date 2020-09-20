const mongoose = require('mongoose');
const app = require('./app');

var port = 3000;

const URI = 'mongodb://localhost:27017/listaToDo';
mongoose.connect(URI, (err,res)=>{
    if (err){
        console.log(`el error es: ${err}`);
    } else{
        console.log('conexion exitosa !!');
        app.listen(port,()=>{
            console.log(`Puerto: ${port}`);
        })
    }
})
