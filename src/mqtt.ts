import { connect } from "mqtt"
const client = connect('ws://broker.hivemq.com:8000/mqtt') //se conecta al broker(servidor intermediario que gestiona la transmision de mensajes entre clientes)

client.on("connect", () => {
  console.log("Conectado Exitosamente");

  //se suscribe al tema "horaActual" para escucharlo
  client.subscribe("horaActual", (err) => {
    if (!err) { //si no hay error
      setInterval(() => {
        const date = new Date(); //creo objeto Date con la fechaHora actual
        const time = date.toTimeString(); //Agarro la hora de la Date y la convierto a string

        client.publish("horaActual", time); //manda un mensaje al tema hotaActual con el valor de time
      }, 5000); //publica cada 5 segundos 
    }
  });
});

// Escucha los mensajes que llegan a los temas a los que el cliente está suscrito
client.on("message", (topic, message) => {
  // message es de tipo buffer por eso lo paso a string
  console.log(message.toString());
  //client.end(); si esto esta descomentado se detiene luego de 1 mensaje.
});


//IMPORTANTE:
// La logica anda bien. Si ven que salen 2 mensajes que no estan separados por 5 segundos es porque seguramente este ejecutando la logica 2 veces por estar tambien en el index2.html.
// Se ejecuta con pnpm dev:start,(se buildea con pnpm build) y las paginas web van a verlas si usan la extension live server(la instalamos para los videos front-end) ->
// al apretar Go live con la pestaña abierta de index.html se abre esta y la segunda, pero en la segunda se van a ver carpetas. para que aparezca con la segunda tienen que irse a la pestaña de index2.html, cerrar el server y volverle a dar go live en la pestaña index2.html. haciendo esto deberian andar al mismo tiempo ambas paginas.

//Eso es molesto pero se arregla facil cuando tengamos solo una pagina, con solo darle a go live iria a esa.