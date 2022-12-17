class Game {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId)
        this.ctx = this.canvas.getContext("2d")
        this.intervalId = null

        this.bg = new Background(this.ctx)
        this.player = new Player(this.ctx, 100, this.canvas.height / 2, 100)
        this.obstacles = []
        
        this.score = 0
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
            this.checkCollision()
            this.getScore()
            this.drawScore()
            this.checkForGameOver()
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

    checkCollision() {
        this.obstacles.forEach(obstacle => {
            if (obstacle.topIsColliding(this.player) /*|| obstacle.bottomIsColliding(this.player)*/) {
                this.gameOver()
            }
        })
    }

    gameOver() {
        clearInterval(this.intervalId)
    }

    getScore() {
        this.obstacles.forEach(obstacle => {
            if(obstacle.x + obstacle.width < 0) {
                this.score++
                this.obstacles.splice(this.obstacles.indexOf(obstacle), 1)
            }
        })
    }

    drawScore() {
        this.ctx.fillStyle = "white"
        this.ctx.font = "24px Arial"
        this.ctx.fillText(`score: ${this.score}`, 30, 40)
    }

    checkForGameOver() {
        if(this.player.y + this.player.height > this.canvas.height) {
            this.gameOver()
        }
    }
}