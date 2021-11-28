module.exports = (io) => io.on('connection', socket => { 
    console.log(`Client connected: ID -> ${socket.id}`);

    socket.on('test', data => console.log(data));

    socket.on('disconnect', ()=> {
        console.log(`Client disconnected: ID -> ${socket.id}`);
    });
});