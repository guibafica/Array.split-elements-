const express = require('express'); // require: importa uma dependência externa

const socketio = require('socket.io'); 
const http = require('http');

const routes = require('./routes');

const app = express(); // Criação da aplicação
const server = http.Server(app);
const io = socketio(server);

app.use(express.json()); // Utilizar formato json
app.use(routes);

server.listen(2222); // A porta q irá executar a aplicação