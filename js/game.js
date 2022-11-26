class Game {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId)
        this.ctx = this.canvas.getContext("2d")
        this.intervalId = null

        this.bg = new Background(this.ctx)
        this.player = new Player(this.ctx, 100, this.canvas.height / 2, 100)
        this.obstacles = []
    }

    start() {
        this.drawAll()
    }

    drawAll() {
        let count = 0
        this.intervalId = setInterval(() => {
            this.clearAll()
            this.bg.draw()
            this.bg.move()
            this.player.draw()
            this.player.move()
            if(count % 150 === 0) {
                this.addObstacles()
            }
            this.drawObstacles()
            this.moveObstacles()
            count++
        }, 1000 / 60)
    }

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    keyDown(event) {
        this.player.keyDown(event.keyCode)
    }
 
    addObstacles() {
        this.obstacles.push(new Obstacle(this.ctx, this.canvas.width, Math.floor(Math.random() * (450 - 100 + 1) + 100), this.player.height * 4, this.bg.speed))
    }

    drawObstacles() {
        this.obstacles.forEach(obstacle => obstacle.draw())
    }

    moveObstacles() {
        this.obstacles.forEach(obstacle => obstacle.move())
    }
}