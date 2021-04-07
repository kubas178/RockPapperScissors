const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

const resultDiv = document.getElementById('result');
const enemyDiv = document.getElementById('enemy');

const rockImgs = document.getElementsByClassName('rock');
const paperImgs = document.getElementsByClassName('paper');
const scissorsImgs = document.getElementsByClassName('scissors');
// 0 -player, 1 - computer//

const avilableValues = ["rock", "paper", "scissors"];

let computerScore = 0;
let playerScore = 0;

const checkWinConditions = (playerValue, enemyValue) => {

    if (playerValue === enemyValue) {
        resultDiv.textContent = "Draw";
    } else if ((playerValue === avilableValues[0] && enemyValue === avilableValues[2]) || (playerValue === avilableValues[1] && enemyValue === avilableValues[0]) || (playerValue === avilableValues[2] && enemyValue === avilableValues[1])) {
        resultDiv.textContent = "You won";
        playerScore++;
    } else {
        resultDiv.textContent = "You Lost";
        computerScore++;
        console.log(playerScore)
    }
    console.log(playerScore,computerScore);

}

const choosingEnemyItem = () => {
    let randomValue = avilableValues[Math.floor(Math.random() * avilableValues.length)];
    return randomValue;
}

const showAnimation = (playerValue, enemyValue) => {
    rockImgs[0].classList.toggle('rock-animation');
    rockImgs[1].classList.toggle('rock-animation');

    rockImgs[0].addEventListener('animationstart', () => {
        paperImgs[0].style.display = 'none';
        paperImgs[1].style.display = 'none';
        scissorsImgs[0].style.display = 'none';
        scissorsImgs[1].style.display = 'none';
      });

    rockImgs[0].addEventListener('animationend', () => {
        rockImgs[0].classList.remove("rock-animation")
        rockImgs[1].classList.remove("rock-animation")
        rockImgs[0].style.display = 'none';
        rockImgs[1].style.display = 'none';
        paperImgs[0].style.display = 'none';
        paperImgs[1].style.display = 'none';
        scissorsImgs[0].style.display = 'none';
        scissorsImgs[1].style.display = 'none';
        showProperImg(playerValue, enemyValue);
      });
}

rockBtn.addEventListener("click", () =>{
    playerChosenItem = avilableValues[0];
    enemyChosenItem = choosingEnemyItem();
    showAnimation(playerChosenItem, enemyChosenItem);
    checkWinConditions(playerChosenItem,enemyChosenItem);
});

paperBtn.addEventListener("click", () =>{
    playerChosenItem = avilableValues[1];
    enemyChosenItem = choosingEnemyItem();
    showAnimation(playerChosenItem, enemyChosenItem);
    checkWinConditions(playerChosenItem,enemyChosenItem);
});

scissorsBtn.addEventListener("click", () =>{
    playerChosenItem = avilableValues[2];
    enemyChosenItem = choosingEnemyItem();
    showAnimation(playerChosenItem, enemyChosenItem);
    checkWinConditions(playerChosenItem,enemyChosenItem);
});

function showProperImg(playerValue, enemyValue){
    if (playerValue === avilableValues[0]){
        rockImgs[0].style.display = "block";
    } else if (playerValue === avilableValues[1]) {
        paperImgs[0].style.display = "block";
    } else {
        scissorsImgs[0].style.display = "block";
    }

    if (enemyValue === avilableValues[0]){
        rockImgs[1].style.display = "block";
    } else if (enemyValue === avilableValues[1]) {
        paperImgs[1].style.display = "block";
    } else {
        scissorsImgs[1].style.display = "block";
    }
}

function setNewRocks() {
    console.log("lol");
    paperImgs[0].classList.remove('paper-display');
    scissorsImgs[0].classList.remove('scissors-display');
    paperImgs[1].classList.remove('paper-display');
    scissorsImgs[1].classList.remove('scissors-display');
    rockImgs[0].style.display = "block";
    rockImgs[1].style.display = "block";
}

function startGame() {
    document.body.style.background = "linear-gradient(180deg, rgba(193,26,43,1) 0%, rgba(221,221,221,1) 40%, rgba(255,255,255,1) 100%)" 
}

