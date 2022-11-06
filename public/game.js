
const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
const btnUp = document.querySelector('#up');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnDown = document.querySelector('#down');
const spanLives = document.querySelector('#lives');

let canvasSize;
let elementsSize;
let level = 0;
let lives = 3;

const playerPosition = {
    x:undefined,
    y:undefined,
};
const elotePosition = {
    x:undefined,
    y:undefined,
};

let enemyPositions =[];

window.addEventListener('load',setCanvasSize);
window.addEventListener('resize',setCanvasSize);

function setCanvasSize(){
if(window.innerHeight > window.innerWidth){
    canvasSize = window.innerWidth * 0.7;
}else{
    canvasSize = window.innerHeight * 0.7;
}

canvasSize = Number(canvasSize.toFixed(0));

canvas.setAttribute('width',canvasSize);
canvas.setAttribute('height',canvasSize);

elementsSize = canvasSize / 10;

playerPosition.x = undefined;
playerPosition.y = undefined;

startGame();
}

function startGame(){

    const map = maps[level];

    if(!map){
        gameWin();
        return;
    }

    const mapRows = map.trim().split('\n');
    const mapRowCols = mapRows.map(row => row.trim().split(''));

    showLives();

    game.clearRect(0,0,canvasSize,canvasSize);
    enemyPositions = [];

    mapRowCols.forEach((row,rowIndex) => {
        row.forEach((col,colIndex)=>{
            const image = images[col];
            const posX = elementsSize * colIndex;
            const posY = elementsSize * rowIndex;

            if(col == 'O'){
                if(!playerPosition.x && !playerPosition.y){
                        playerPosition.x = posX;
                        playerPosition.y = posY;
                    }
                } else if (col == 'I'){
                    elotePosition.x = posX;
                    elotePosition.y = posY;
                } else if (col == 'X'||col=='N'||col=='M'){
                    enemyPositions.push({
                        x: posX,
                        y: posY,
                    })
                }

            game.drawImage(image,posX,posY,elementsSize,elementsSize);
        });
    });
    movePlayer();
}

function movePlayer(){
    const eloteCollisionX = playerPosition.x.toFixed(0) == elotePosition.x.toFixed(0);
    const eloteCollisionY = playerPosition.y.toFixed(0) == elotePosition.y.toFixed(0);
    const eloteCollision = eloteCollisionX && eloteCollisionY;
    
    if (eloteCollision) {
      levelWin();
    }
    
    const enemyCollision = enemyPositions.find((enemy)=>{
        const enemyCollisionX = enemy.x.toFixed(0) == playerPosition.x.toFixed(0);
        const enemyCollisionY = enemy.y.toFixed(0) == playerPosition.y.toFixed(0);
        return enemyCollisionX && enemyCollisionY;
    });
    if(enemyCollision){
        levelFail();
    }


    if(playerPosition.x<elementsSize*0){
        playerPosition.x=elementsSize*0
    }
    if(playerPosition.y<elementsSize*0){
        playerPosition.y=elementsSize*0
    }
    if(playerPosition.x>elementsSize*9){
        playerPosition.x=elementsSize*9
    }
    if(playerPosition.y>elementsSize*9){
        playerPosition.y=elementsSize*9
    }


    game.drawImage(images['PLAYER'],
    playerPosition.x,playerPosition.y,
    elementsSize,elementsSize);
}

function levelWin(){
    console.log('subiste de nivel');
    level++;
    startGame();
} 

function levelFail(){
    console.log('chocaste con un enemigo :(');
    lives--;

    if(lives <= 0){
        level = 0;
        lives = 3;
    }

    playerPosition.x = undefined;
    playerPosition.y = undefined;
    startGame();
}

function gameWin(){
    window.location.href = "./login";
    console.log('terminaste el juego');
}

function showLives(){
   const heartsArray = Array(lives).fill(images['H'])
   console.log(heartsArray);

    spanLives.innerHTML = "";
   heartsArray.forEach(heart => spanLives.append(heart));
}

window.addEventListener('keydown', moveByKeys);
btnUp.addEventListener('click', moveUp);
btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);
btnDown.addEventListener('click', moveDown);

function moveByKeys(){
    if(event.key == 'ArrowUp'){
        moveUp();
    }else if(event.key == 'ArrowLeft'){
        moveLeft();
    }else if(event.key == 'ArrowRight'){
        moveRight();
    }else if(event.key == 'ArrowDown'){
        moveDown();
    }
} 

function moveUp(){
    playerPosition.y -= elementsSize;
    startGame();
};
function moveLeft(){
    console.log('izquierda');
    playerPosition.x -= elementsSize;
    startGame();
}
function moveRight(){
    console.log('derecha');
    playerPosition.x += elementsSize;
    startGame();
};
function moveDown(){
    console.log('abajo');
    playerPosition.y += elementsSize;
    startGame();
};