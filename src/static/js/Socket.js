class Socket {
    constructor(url) {
        this.socket = io(url);
        this.init();
    }

    async init() {
        this.socket.on('NEW_PLAYER_IN_WORLD', () => {
            alert('Novo jogador entrou!');
        });
    }

    async enterGame() {
        const worldId = window.location.href.split('/')[5];
        await this.socket.emit('TO_ENTER', { worldId });
    }
}