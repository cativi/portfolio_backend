// Creación y configuración del SERVER
const http = require('http');
const app = require('./src/app');

const Item = require('./src/models/items.model');

// Config .env
require('dotenv').config();

// Config DB
require('./src/config/db');

// Creación server
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT);

// Listeners
server.on('listening', () => {
    console.log(`Servidor escuchando sobre el puerto ${PORT}`);
});

server.on('error', (error) => {
    console.log(error);
})


