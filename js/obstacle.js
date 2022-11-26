class Obstacle {
    constructor(ctx, x, gapStart, gapSize, speed) {
        this.ctx = ctx
        this.x = x
        this.gapStart = gapStart
        this.gapSize = gapSize
        this.width = 90
        this.height = 500
        
        this.topObs = new Image()
        this.topObs.src = "images/obstacle_top.png"
        this.topObsIsReady = false
        this.topObs.onload = () => {
            this.topObsIsReady = true
        }

        this.bottomObs = new Image()
        this.bottomObs.src = "images/obstacle_bottom.png"
        this.bottomObsIsReady = false
        this.bottomObs.onload = () => {
            this.bottomObsIsReady = true
        }

        this.speed = speed
    }

    draw() {
        if(this.topObsIsReady && this.bottomObsIsReady) {
            this.ctx.drawImage(this.topObs, this.x, this.gapStart - this.height, this.width, this.height)
            this.ctx.drawImage(this.bottomObs, this.x, this.gapStart + this.gapSize, this.width, this.height)
        }
    }

    move() {
        this.x -= this.speed
    }
}