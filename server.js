//cargamos el paquete http
var http = require('http');
//cargamos el paquete fs, encargado de la escritura y lectura de ficheros
var fs = require('fs');

//creamos el servidor http
var server = http.createServer(function(request, response) {
    //y modificamos la respuesta del servidor
    response.writeHead(200, {'content-type': 'text/html'}); 

    fs.readFile('index.html', function(err, data){
        //controlamos si la lectura devuelve error
        //si es así propagamos la excepción
        if(err) throw err;
        response.write(data);
        //enviamos la respuesta
        response.end();
    }); 
});
//iniciamos el servidor escuchando en el puerto 3000
server.listen(3000);

