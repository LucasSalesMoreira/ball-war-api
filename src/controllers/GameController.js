let numberOfPlayers = [];

let globalStatus = [];

function filterResponseArray(response) {
    let responseArray = [];
    response.forEach((item) => {
        let { id, gameObject } = item;
        responseArray.push({ id, gameObject });
    });
    return responseArray;
}

function removePlayer(roomName, indexPlayer) {
    let worldId = roomName.split('-')[1];
    globalStatus[worldId].playersArray.splice(indexPlayer, 1);
    numberOfPlayers[worldId].size--;
    globalStatus[worldId].size = numberOfPlayers[worldId].size;
    console.log(globalStatus[worldId]);
}

function sortColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

module.exports = {
    async enter(io, client) {
        const { socket, data } = client;
        const { worldId } = data;
        const roomName = `#room-${worldId}`;

        try { 
            numberOfPlayers[worldId].size; 
        } catch (err) {
            numberOfPlayers[worldId] = { roomName, size: 0 };
        }

        if (numberOfPlayers[worldId].size < 4) {
            socket.join(roomName);        
            let playerObjectTemplate = {
                id: socket.id,
                socket,
                gameObject: {
                    x: Math.floor(Math.random() * 200) + 10,
                    y: Math.floor(Math.random() * 100) + 10,
                    color: sortColor(),
                    shot: {
                        x: null,
                        y: null
                    }
                }
            };

            numberOfPlayers[worldId].size++;

            if (numberOfPlayers[worldId].size === 1) {
                globalStatus[worldId] = {
                    roomName,
                    size: numberOfPlayers[worldId].size,
                    playersArray: [playerObjectTemplate]
                };
            } else if (numberOfPlayers[worldId].size > 1) {
                globalStatus[worldId].size = numberOfPlayers[worldId].size;
                globalStatus[worldId].playersArray.push(playerObjectTemplate);
            }

            console.log(globalStatus[worldId].size);
            await io.to(roomName).emit('NEW_PLAYER_IN_WORLD', filterResponseArray(globalStatus[worldId].playersArray));
        
        } else {
            await socket.emit('CLOSED'); // Tratar no front-end!
            console.log(globalStatus[worldId]);
            console.log('CLOSED');
        }
    },
    
    async start(io, client) {
        
    },

    async action(io, client) {
        let { socket, data } = client;
        console.log(data);
    },
    
    async finish(io, client) { },
    
    async exit(io, client) {
        let { socket } = client;
        let isFound = false;
        for (room of globalStatus) {
            let indexPlayer = 0;
            if (room !== undefined) {
                for (player of room.playersArray) {
                    if (player.id === socket.id) {
                        isFound = true;
                        break;
                    }
                    indexPlayer++;
                }
                if (isFound) {
                    removePlayer(room.roomName, indexPlayer);
                    await io.to(room.roomName).emit('EXIT_PLAYER');
                    break;
                }
            }
        }
        console.log(`Client disconnected: ID -> ${socket.id}`);
    }
}; 