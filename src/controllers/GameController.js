let numberOfPlayers = [];

let globalStatus = [];

module.exports = {
    async enter(io, client) {
        const { socket, data } = client;
        const { worldId } = data;

        try { 
            numberOfPlayers[worldId].size; 
        } catch (err) {
            numberOfPlayers[worldId] = { size: 0 };
        }

        if (numberOfPlayers[worldId].size < 4) {
            const roomName = `#room-${worldId}`;
            socket.join(roomName);

            let playerObjectTemplate = {
                id: socket.id,
                socket,
                gameObject: {
                    x: 0,
                    y: 0,
                    shot: {
                        x: null,
                        y: null
                    }
                }
            };

            numberOfPlayers[worldId].size += 1;
            console.log(numberOfPlayers);

            if (numberOfPlayers[worldId].size === 1) {
                globalStatus[worldId] = {
                    size: numberOfPlayers[worldId].size,
                    playersArray: [playerObjectTemplate]
                };
            } else if (numberOfPlayers[worldId].size > 1) {
                globalStatus[worldId].size = numberOfPlayers[worldId].size;
                globalStatus[worldId].playersArray.push(playerObjectTemplate);
            }
            
            await io.to(roomName).emit('NEW_PLAYER_IN_WORLD');
        
        } else {
            socket.emit('CLOSED'); // Tratar no front-end!
            console.log(globalStatus[worldId]);
            console.log('CLOSED');
        }
    },

    async start(io, client) { },
    async finish(io, client) { },
    async exit(io, client) { }
};