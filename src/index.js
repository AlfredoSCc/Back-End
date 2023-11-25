//Llamada de Paquetes
const express = require("express")


//Configuraciones

//Inicializamos los paquetes
const app = express();
const puerto = 6000;


//Ejecución

app.get("/prueba", function (req,res){
    res.send("Hola, estas en la web de prueba")
})

//Puerto en el que Escuchara o trabajara nuestra pagina

app.listen(3000);
