module.exports = {
    async enter(io, client) {
        const { worldId } = client.data;
        const roomName = `#room-${worldId}`;
        const { socket } = client
        socket.join(roomName);
        await io.to(roomName).emit('NEW_PLAYER_IN_WORLD');
    },
    async start(io, client) {

    },
    async finish(io, client) {

    }
};