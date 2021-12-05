const cacheArray = [];

const screenWidth = 300;
const screenHeight = 150;

module.exports = {
    async addPlayer(worldId, player) {
        const index = cacheArray.findIndex(world => world === worldId);
        if (index !== -1) {
            const numberOfPlayers = cacheArray[index].playersArray.length;
            let color = null;
            if (numberOfPlayers < 4) {
                switch (numberOfPlayers) {
                    case 0:
                        color = '#00fc32';
                        break;
                    case 1:
                        color = '#00d2fc';
                        break;
                    case 2:
                        color = '#b56edb';
                        break;
                    case 3:
                        color = '#fb0026';
                        break;
                }
                const { playerId } = player;
                cacheArray[index].playersArray.push({
                    playerId,
                    x: Math.floor((Math.random() * screenWidth - 50) + 10),
                    y: Math.floor((Math.random() * screenHeight - 20) + 10),
                    shotX: null,
                    shotY: null,
                    color 
                });
                return { ok: true };
            } else {
                return { ok: false, error: `O mundo ${worldId} já encontra-se lotado!` };
            }
        } else {
            return { ok: false, error: 'Mundo não encontrado!' };
        }
    },
    async updatePlayer() {

    },
    async removePlayer() {

    },
    async addWorld(world) {
        const { id, name, backgroundUrl } = world;
        cacheArray.push({
            id,
            name,
            backgroundUrl,
            playersArray: []
        });

        return { ok: true };
    }
    /**
     * Todos os métodos para atualizar os dados dos jogos em multiplos mundos...
     */
};