let rainbow;
let introScreen;
let fWorldScreen;
let gameOverScreen;

function buildDom(htmlString){
const tempDiv = document.createElement('div');
tempDiv.innerHTML = htmlString;
return tempDiv.children [0];
}

function createIntroScreen() {
  introScreen = buildDom(`<main>
      <h1>Leprechaum Gold</h1>
      <button> Start </button>
    </main>
    `);

    document.body.appendChild(introScreen);
    const startButton = introScreen.querySelector('button');

    startButton.addEventListener('click', startGame);

}

function removeIntroScreen() {
  introScreen.remove();

}

function createfWorldScreen() {
  fWorldScreen = buildDom(`
  <main class ="rainbow container">
    <header>
      <div class="gold">
        <span class ="label"> Gold: </span>
        <span class ="value"></span>
      </div>

      <div class="score">
        <span class= "label"> Score: </span>
        <span class= "value"></span>
      </div>
    </header>

    <div class="canvas-container">
      <canvas></canvas>
    </div>
  </main>
    `);
  document.body.appendChild(fWorldScreen);
  return fWorldScreen;
}

function removefWorldScreen() {
  fWorldScreen.remove();
}

function createGameOverScreen(score) {
  gameOverScreen = buildDom(`
    <main>
    <h1>Game over</h1>
    <p>Your score:<span>${score}</span></p>
    <button>Restart</button>
    </main>
  `);
  const button = gameOverScreen.querySelector('button');
  button.addEventListener('click', startGame);

  document.body.appendChild(gameOverScreen);
}

function removeGameOverScreen() {
  gameOverScreen.remove();
}

function startGame() {
  removeIntroScreen();
  if (gameOverScreen){
    removeGameOverScreen();
  }
  createfWorldScreen();

  fWorld = new FWorld(fWorldScreen);
  //fWorld.fWorldScreen = fWorldScreen;
  fWorld.start();
}

function endGame(score) {
  removefWorldScreen();
  createGameOverScreen(score);
}


window.addEventListener('load',createIntroScreen);
