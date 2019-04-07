var express = require('express');
var app = express();
const PORT = 3000;

app.get('/', function (req, res) {
  res.send('Hola Dani');
  console.log(req.headers);
});

app.get('/daniDos', function (req, res) {
  res.send('Hola Dani2');
});

app.get('/about', function (req, res) {
  res.send('about');
});

app.post('/about22', function (req, res) {
  res.send('Got a POST request');
});

app.listen(3000, function () {
console.log(`Server running at port ${PORT}`);
});

app.post('/', function(req, res){
    console.log(req);
    return 'david'
})

app.listen(3000, function () {
console.log(`Server running at port ${PORT}`);
});

var obtenerTiempo = function (requerimiento, respuesta, siguiente) {

    var text = '{ "employees" : [' +
                                    '{ "firstName":"John" , "lastName":"Doe" },' +
                                    '{ "firstName":"Anna" , "lastName":"Smith" },' +
                                    '{ "firstName":"Peter" , "lastName":"Jones" } ]}'; 

    requerimiento.obtenerTiempo =  text;
    siguiente();
};

app.use(obtenerTiempo);

app.get('/escritura', function(requerimiento, respuesta){
    var textoRespuesta = ' texto de respuesta middelware DCE, LOD ';
    
    textoRespuesta += ' solicitud de funcion  ' + requerimiento.obtenerTiempo + ' ';
    console.log(requerimiento.obtenerTiempo);

    respuesta.send(textoRespuesta);
})


app.get('/sql', function (req, res) {
   
    var sql = require("mssql");

    var config = {
        server: "servidor", // Use your SQL server name
        database: "BD_DCE", // Database to connect to
        user: "usuario", // Use your username
        password: 'password', // Use your password
        port: 1433,
        // Since we're on Windows Azure, we need to set the following options
        options: {
              encrypt: true
          }
       };

 // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from geoparques', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});


app.delete
