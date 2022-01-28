let numberOfPlayers = [];

module.exports = {
    async enter(io, client) {
        const { worldId } = client.data;
        if (numberOfPlayers[worldId] < 4) {
            const roomName = `#room-${worldId}`;
            const { socket } = client
            socket.join(roomName);
            numberOfPlayers[worldId] += 1;
            await io.to(roomName).emit('NEW_PLAYER_IN_WORLD');
        } else {
            socket.emit('CLOSED'); // Tratar no front-end!
        }
    },
    async start(io, client) { },
    async finish(io, client) { },
    async exit(io, client) { }
};