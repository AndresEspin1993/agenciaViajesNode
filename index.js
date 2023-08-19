// const express = require('express');
import express  from "express";
import router  from "./routes/index.js";
import db from "./config/db.js";


const app = express();

// conectar base de datos
db.authenticate()
    .then( () => console.log('base de datos conectada'))
    .catch(error => console.log(error));

// definir puerto
const port = process.env.PORT || 4000;



// habilitar pug
app.set('view engine', 'pug')

// obtener año actual
app.use((req,res, next) =>{
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio= 'Agencia de Viajes'
    return next();
})

// agregar body parser para leer datos del form
app.use(express.urlencoded({extended: true}))

// definir la carpeta publica
app.use(express.static('public'));



//agregar router
app.use('/', router)


app.listen(port, () =>{
    console.log(`el servidor esta funcionando en el puerto ${port}`);
})