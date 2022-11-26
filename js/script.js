window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    const startScreen = document.getElementById("start-screen")
    startScreen.remove()
    const game = new Game("my-canvas")
    game.start()
    document.addEventListener("keydown", (event) => {
      game.keyDown(event)
    })
  }
};
