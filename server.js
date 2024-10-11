import Aedes from "aedes";
import aedesServerFactory from 'aedes-server-factory'; //biblioteca que ayuda a crear server compatible con ws

const aedes = new Aedes(); //Para manejar las conexiones MQTT. Brocker MQQT


//Puerto WebSocket
const wsPort = 8888;

//Configuracion y creacion de server WebSocket.
const wsServer = aedesServerFactory.createServer(aedes, {ws: true,}); 

wsServer.listen(wsPort, () => { //inicializa el server ws
  console.log(`Servidor MQTT sobre WebSockets corriendo en el puerto ${wsPort}`);
});

aedes.on('client', function (client) {
  console.log(`Cliente conectado: ${client.id || 'Sin ID'}`);
});

aedes.on('clientDisconnect', function (client) {
  console.log(`Cliente desconectado: ${client.id}`);
});

aedes.on('clientError', function (client, err) {
  console.error(`Error en cliente ${client.id}:`, err.message);
});
