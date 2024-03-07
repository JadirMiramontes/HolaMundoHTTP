//llamamos el modulo http
const http = require('http');
//establecemos la url o IP de nuestro servidor
const hostname = '192.168.1.124';
//Establecemos el puerto de escucha
const port = 3000;
//Creamos una instancia http con un reques y un response
const server = http.createServer((req,res) =>{
    //el servidor respondera un codigo 200
    res.statusCode = 200;
    //El servidor respondera con un texto plano
    res.setHeader('Content.Type', 'text/html');
    //El servidor respondera el mensaje hola mundo
    res.end('<h1>HOLA MUNDO </h1>');
});

server.listen(port, hostname,()=>{
    console.log(`el servidor se esra ejecuntando en http://${hostname}:${port}/`);
});