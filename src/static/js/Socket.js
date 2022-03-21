class Socket {
    constructor(url) {
        this.socket = io(url);
        this.worldId = window.location.href.split('/')[5];
        this.init();
    }

    init() {
        this.socket.on('NEW_PLAYER_IN_WORLD', (playersArray) => {
            //alert('Novo jogador entrou!');
            console.log(playersArray);
            testGlobalVariable = playersArray;
        });
    }

    enterGame() {
        this.socket.emit('TO_ENTER', { worldId: this.worldId });
    }

    sendAction(action) {
        this.socket.emit('ACTION', { worldId: this.worldId, action })
    }

    closed() {
        this.socket.on('CLOSED', () => {
            alert('Esta sala está cheia!');
        });
    }
}