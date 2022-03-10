class Socket {
    constructor(url) {
        this.socket = io(url);
        this.init();
    }

    async init() {
        this.socket.on('NEW_PLAYER_IN_WORLD', (playersArray) => {
            alert('Novo jogador entrou!');
            console.log(playersArray);
        });
    }

    async enterGame() {
        const worldId = window.location.href.split('/')[5];
        await this.socket.emit('TO_ENTER', { worldId });
    }

    async closed() {
        this.socket.on('CLOSED', () => {
            alert('Esta sala está cheia!');
        });
    }
}