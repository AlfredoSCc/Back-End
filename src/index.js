//Importación de Paquetes
const express = require("express")



//Definir Configuraciones
//Inicializamos el paquete express
const app = express();


//Ejecución

app.get("/prueba", function (req,res){
    res.send("Hola, estas en la web de prueba")
})

//Puerto en el que Escuchara o trabajara nuestra pagina

app.listen(3000);
