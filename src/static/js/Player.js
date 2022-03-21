class Player {
    constructor(data) {
        this.x = data.x;
        this.y = data.y;
        this.color = data.color;
        this.actions = data.actions;
    }

    render(ctx) {
        let p = new Path2D();        
        p.arc(this.x, this.y, 5, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill(p);
    }
}