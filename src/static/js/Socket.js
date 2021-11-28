class Socket {
    constructor(url) {
        this.socket = io(url);
    }

    sendTest() {
        this.socket.emit('test', true);
    }
}