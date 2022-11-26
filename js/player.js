class Player {
    constructor(ctx, x, y, width) {
        this.ctx = ctx
        this.x = x
        this.y = y
        this.width = width
        this.img = new Image()
        this.img.src = "images/flappy.png"
        this.isReady = false
        this.img.onload = () => {
            this.isReady = true
            this.height = this.width * this.ctx.canvas.height / this.ctx.canvas.width
        }

        this.ySpeed = 0
        this.gravity = 0.2
    }

    draw() {
        if(this.isReady) {
            this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
        }
    }

    move() {
        this.y += this.ySpeed
		this.ySpeed += this.gravity
    }

    keyDown(eventCode) {
        if(eventCode === 32) {
            this.ySpeed = -5
        }
    }
}