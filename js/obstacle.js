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
        this.topY = this.gapStart - this.height

        this.bottomObs = new Image()
        this.bottomObs.src = "images/obstacle_bottom.png"
        this.bottomObsIsReady = false
        this.bottomObs.onload = () => {
            this.bottomObsIsReady = true
        }
        this.bottomY = this.gapStart + this.gapSize

        this.speed = speed
    }

    draw() {
        if(this.topObsIsReady && this.bottomObsIsReady) {
            this.ctx.drawImage(this.topObs, this.x, this.topY, this.width, this.height)
            this.ctx.drawImage(this.bottomObs, this.x, this.bottomY, this.width, this.height)
        }
    }

    move() {
        this.x -= this.speed
    }

    topIsColliding(obj) {
        return this.x < obj.x + obj.width
        && this.x + this.width > obj.x
        && this.topY < obj.y + obj.width
        && this.topY + this.height > obj.y
    }

    bottomIsColliding(obj) {
        return this.x < obj.x + obj.width
        && this.x + this.width > obj.x
        && this.bottomY < obj.y + obj.width
        && this.bottomY + this.height > obj.y
    }
}