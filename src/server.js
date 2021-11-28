require('./database/connectionFactory');
const express = require('express');
const path = require('path');
const { port, host } = require('./configs/config');
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use('/api', routes);
app.use(express.static(path.resolve(path.join(__dirname, 'static/'))));

const httpServer = require('http').createServer(app);
require('./ioEvents')(require('socket.io')(httpServer));

httpServer.listen(port, host, error => {
    if (error) 
        console.log(error);
    else
        console.log(`Server running in ${host}:${port}`);
});