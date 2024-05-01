// app.js

const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Configuración de rutas
app.use('/api', require('./routes/api')); // Mount the router for /api routes

app.get('/', (req, res) => {
    res.send('Ruta en el Backend');
});

module.exports = app;
