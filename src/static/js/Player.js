class Player {
    constructor(data, ctx) {
        this.x = data.x;
        this.y = data.y;
        this.color = data.color;
        this.actions = data.actions;
        this.ctx = ctx;
    }

    render() {
        
        this.ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }
}