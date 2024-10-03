Installar el broker mosquitto
luego ir a la carpeta donde se instalo y abrir como administrador el archivo "mosquitto.conf"
luego agregar abajo de todo esto:

# Puerto para conexiones WebSocket
listener 9001
protocol websockets

# Forzar a Mosquitto a escuchar solo en IPv4
socket_domain ipv4

# (Opcional) Configuración adicional
allow_anonymous true

luego abrir la consola y ejecutar mosquitto -h
si funciona el comando ejecutar mosquitto -c mosquitto.conf
sino moverse desde consola hasta la carpeta mosquito y ejecutar esto:
.\mosquitto.exe -c mosquitto.conf -v
luego si no tira error ya deberia estar corriendo mosquito con el servicio de websocket en el puerto 9001
ahora hay que ejecutar el comando pnpm start en la carpeta del proyecto de mqtt, si tira error primero hacer un build de los archivos .ts

ATENCION: capaz debas revisar que la ruta hacia el index.html del servidor de express funcione en linux 
