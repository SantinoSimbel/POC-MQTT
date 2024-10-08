import Aedes from "aedes";
import { createServer } from 'net'
import aedesServerFactory from 'aedes-server-factory';

const aedes = new Aedes(); //Para manejar las conexiones MQTT.

//Puerto TCP
const tcpPort = 1883;

//Puerto WebSocket
const wsPort = 8888;

//Configuracion de server TPC.
const tcpServer = createServer(aedes.handle)

//Configuracion de server WebSocket.
const wsServer = aedesServerFactory.createServer(aedes, {ws: true});


wsServer.listen(wsPort, () => {
  console.log(`Servidor MQTT sobre WebSockets corriendo en el puerto ${wsPort}`);
})

tcpServer.listen(tcpPort, () => {
  console.log(`Servidor MQTT sobre TCP corriendo en puerto ${tcpPort}`);
});