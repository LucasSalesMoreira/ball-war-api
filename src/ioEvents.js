const GameController = require('./controllers/GameController');
module.exports = (io) => io.on('connection', socket => { 
    console.log(`Client connected: ID -> ${socket.id}`);

    socket.on('TO_ENTER', async (data) => await GameController.enter(io, { socket, data }));
    
    socket.on('disconnect', () => console.log(`Client disconnected: ID -> ${socket.id}`));
});