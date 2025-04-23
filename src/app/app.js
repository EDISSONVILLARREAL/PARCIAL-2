const express =  require("express");
const config = require("../config");
//const mysql = require("../db/mysql");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");



const app = express();
const estudiante = require("../routes/estudiantes.routes.js");
const curso = require("../routes/cursos.routes.js");
const inscripcion = require("../routes/inscripciones.routes.js");

//middlewares de configuracion
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//config 
app.set("port", config.app.port);


//rutas
app.use("/users", usuarios);

//public static files
app.use(express.static(path.join(__dirname, "../../uploads")));



module.exports = app;



