import Aedes from "aedes";
import aedesServerFactory from 'aedes-server-factory'; //biblioteca que ayuda a crear server compatible con ws

const aedes = new Aedes(); //Para manejar las conexiones MQTT. Brocker MQQT


//Puerto WebSocket
const wsPort = 8888;

//Configuracion y creacion de server WebSocket.
const wsServer = aedesServerFactory.createServer(aedes, {ws: true}); 

wsServer.listen(wsPort, () => { //inicializa el server ws
  console.log(`Servidor MQTT sobre WebSockets corriendo en el puerto ${wsPort}`);
})
