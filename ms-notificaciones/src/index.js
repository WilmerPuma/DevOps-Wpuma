// Archivo de ejemplo para ms-notificaciones
const http = require('http');
const PORT = 3000;
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({mensaje: 'Microservicio de notificaciones funcionando'}));
}).listen(PORT, () => {
  console.log(`Servidor ms-notificaciones escuchando en puerto ${PORT}`);
});
