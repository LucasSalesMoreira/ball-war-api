const GameController = require('./controllers/GameController');
module.exports = (io) => io.on('connection', socket => { 
    console.log(`Client connected: ID -> ${socket.id}`);

    socket.on('TO_ENTER', async (data) => await GameController.enter(io, { socket, data }));
    socket.on('ACTION', async (data) => await GameController.action(io, { socket, data }));
    socket.on('disconnect', async () => await GameController.exit(io, { socket }));
});