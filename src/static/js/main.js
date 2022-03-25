var testGlobalVariable = [];

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
    const gameSpeed = 10;
    const actions = {
        direction: null,
        canvasW,
        canvasH,
        shot: {
            x: null,
            y: null
        }
    };

    function clear() {
        ctx.clearRect(0, 0, canvasW, canvasH);
    }

    document.addEventListener('keyup', function(event) {
        const key = event.key;
        if (key === 'w' || key === 's' || key === 'a' || key === 'd') {
            actions.direction = key;
        }
    });


    const intervalId = setInterval(() => { 
        connection.sendAction(actions);
    }, gameSpeed);

    function loop () {
        clear();    
        testGlobalVariable.forEach(player => {
            let { x, y, color } = player.gameObject;
            //document.getElementsByTagName('body').style.background = color;
            new Player({ x, y, color, action: null }).render(ctx);
        });
        window.requestAnimationFrame(loop);
    }

    connection.enterGame();
    connection.readActions();
    connection.closed();
    loop();
}

gameLoop(init());