const express = require('express');
const app = express();
const PORT = 3100;//require("./config");

require("./routes/api")(app);
require("./routes/views")(app);

function init(){
  console.log("Iniciando el servidor Express...");
  app.listen(PORT, ()=>{
  console.log("El servidor Express está activo.")
});
}

init();

app.listen(3000, function () {
  console.log(`Server running at port ${PORT}`);
});

// app.get('/', function (req, res) {
//   res.send('Hola Dani');
//   console.log(req.headers);
// });

// // ↓ TEMPLATE: GET
// app.get('/templates', function (req, res) {
//     res.render('index' , {
//         title:'Pug templates',
//         mensaje:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus.',
//         vegetables: [
//             "carrot",
//             "potato",
//             "beet",
//             "apple",
//             "orange",
//         ]
//     });
// });

// // ↓ TEMPLATE :POST
// app.post('/templatepost', function (req, res) {
//     res.render('templatepost' , {
//         title:'Post view',
//         mensaje:'Mensaje post view'
//     });
// });

// app.set(
//     'view engine' ,'pug',
// )
// app.set(
//     'views', './views'
// )
// // ↑↑ END TEMPLATES 
// let estaLogueado = () => true;
// let testMiddleware =  ( (req, res, next) =>{
//   if( estaLogueado() ) {
//     res.send(`!-- USTED FUE AUTORIZADO --!   
//       HTTP =>  ${req.method}   
//       URL =>  ${req.url}
//       IP =>  ${req.ip} 
//       Host =>  ${req.hostname}`
//       );
//     console.log('-VALIDO-');
//     next();
//   }else {
//     res.send(`!X-X NO ESTA LOGUEADO X-X-X DENEGADO X-X!   
//       HTTP =>  ${req.method}   
//       URL =>  ${req.url}
//       IP =>  ${req.ip}
//       Host =>  ${req.hostname}`
//       );
//     console.log('-INVALIDO-');
    
    
// }
// });

// //Esto es pa que no se dañe los otros
// app.get(('/middleware'), (req, res, next) => {
//   res.send(`Servidor corriendo`);
// });


// app.get('/daniDos', function (req, res) {
//   res.send('Hola Dani2');
// });

// app.get('/about', function (req, res) {
//   res.send('about');
// });

// app.post('/about22', function (req, res) {
//   res.send('Got a POST request');
// });

// // app.listen(PORT, function () {
// // console.log(`Server running at port ${PORT}`);
// // });

// var mysql = require('mysql');

// var connection = mysql.createConnection({
//   host: "localhost:3306",
//   user: "root",
//   password: "0000",
//   database : 'my_db'
// });

// //connection.connect()

// // connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
// //   if (err) throw err

// //   console.log('The solution is: ', rows[0].solution)
// // })

// //sconnection.end()

// app.use(testMiddleware);

// //npm isntall mssql 
// app.get('/sql', function (req, res) {
   
//   var sql = require("mssql");

//   var config = {
//       server: "servidor", // Use your SQL server name
//       database: "BD_DCE", // Database to connect to
//       user: "usuario", // Use your username
//       password: 'password', // Use your password
//       port: 1433,
//       // Since we're on Windows Azure, we need to set the following options
//       options: {
//             encrypt: true
//         }
//      };

// // connect to your database
//   sql.connect(config, function (err) {
  
//       if (err) console.log(err);

//       // create Request object
//       var request = new sql.Request();
         
//       // query to the database and get the records
//       request.query('select * from geoparques', function (err, recordset) {
          
//           if (err) console.log(err)

//           // send records as a response
//           res.send(recordset);
          
//       });
//   });
// });



// var obtenerTiempo = function (requerimiento, respuesta, siguiente) {

//   var text = '{ "employees" : [' +
//                                   '{ "firstName":"John" , "lastName":"Doe" },' +
//                                   '{ "firstName":"Anna" , "lastName":"Smith" },' +
//                                   '{ "firstName":"Peter" , "lastName":"Jones" } ]}'; 

//   requerimiento.obtenerTiempo =  text;
//   siguiente();
// };

// app.use(obtenerTiempo);

// app.get('/escritura', function(requerimiento, respuesta){
//   var textoRespuesta = ' texto de respuesta middleware DCE, LOD ';
  
//   textoRespuesta += ' solicitud de funcion  ' + requerimiento.obtenerTiempo + ' ';
//   console.log(requerimiento.obtenerTiempo);

//   respuesta.send(textoRespuesta);
// })

