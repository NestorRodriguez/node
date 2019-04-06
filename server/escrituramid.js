var express = require('express');
var app = express();

var obtenerTiempo = function (requerimiento, respuesta, siguiente) {
    requerimiento.Date.now();
    next();
};

app.use(obtenerTiempo);

app.get('/escritura', function(requerimiento, respuesta){
    var textoRespuesta = 'texto de respuesta middelware DCE, LOD';
    
    textoRespuesta += 'solicitud de funcion ' + requerimiento.obtenerTiempo + '';


    respuesta.send(textoRespuesta);
})