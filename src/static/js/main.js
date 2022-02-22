function init() {
    const canvas = document.getElementById('game-screen');
    canvas.style.width = `${document.body.clientWidth - 50}px`;
    canvas.style.height = `${document.body.clientHeight - 50}px`;
    const ctx = canvas.getContext('2d');
    const connection = new Socket('http://192.168.1.66:3001');
    return { ctx, canvasW: canvas.width, canvasH: canvas.height, connection };
}

function gameLoop(config) {
    const { ctx, canvasW, canvasH, connection } = config;
    const gameSpeed = 30;
    const actions = {
        direction: null,
        shot: {
            x: null,
            y: null
        }
    };

    function clear() {
        ctx.clearRect(0, 0, canvasW, canvasH);
    }

    document.addEventListener('keydown', function(event) {
        const key = event.key;
        if (key === 'w' || key === 's' || key === 'a' || key === 'd')
            actions.direction = key;
        
        /*
        * Enviar via webSocket o objeto actions para informar a api as inteções do player
        */
    });

    /*
    const intervalId = setInterval(function() { 
        
    }, gameSpeed);*/

    function loop () {
        clear();
        
        new Player({ x: 10, y: 10, color: '#064c66', actions }, ctx).render();
        
        window.requestAnimationFrame(loop);
    }

    connection.enterGame();
    connection.closed();
    loop();
}

gameLoop(init());