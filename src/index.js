//Llamada de Paquetes
const express = require("express")


//Configuraciones

//Inicializamos los paquetes
const app = express();
const puerto = 6000;


//Rutas

app.get("/prueba",(req, res) => {
    res.send("Pagina de Prueba")
});


//Ejecución
//Indico que escuche las peticiones en el puerto
app.listen(puerto,()=>{ 
console.log("Servidor escuchando en el puerto " + puerto)
});
