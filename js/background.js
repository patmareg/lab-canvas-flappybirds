class Background {
    constructor(ctx) {
        this.ctx = ctx
        this.x = 0
        this.y = 0
        this.img = new Image()
        this.img.src = "images/bg.png"
        this.isReady = false
        this.img.onload = () => {
            this.isReady = true
        }
        this.speed = 5
    }
    
    draw() {
        if(this.isReady) {
            this.ctx.drawImage(this.img, this.x, this.y, this.ctx.canvas.width, this.ctx.canvas.height)
            this.ctx.drawImage(this.img, this.x + this.ctx.canvas.width, this.y, this.ctx.canvas.width, this.ctx.canvas.height)
        }
    }

    move() {
        this.x -= this.speed

        if(this.x + this.ctx.canvas.width <= 0) {
            this.x = 0
        }
    }
}