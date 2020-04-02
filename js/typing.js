window.addEventListener('load', init)
//Globals

//Availabel levels 
const levels = {
    easy:5,
    medium:3,
    hard:2
}

// To change level
const currentLevel = levels.easy;
let time = currentLevel;
let score = 0;
let isplaying;

//DOM elements
const wordInput = document.querySelector('#word-input');
const currentword = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'hat',
    'bat',
    'lucky',
    'cocktail',
    'runaway',
    'joker'
];

//Initialize Game
function init(){
    //Load word from array
    showWord(words);
    //Start matching on word input
    wordInput.addEventListener('input', startMatch);
    //call countdown everyy second
    setInterval(countdown, 1000);
    //Check game status
    setInterval(checkStatus, 50);
}

//Start match
function startMatch(){
        //id score is -1 , display 0
        if(score === -1){
            scoreDisplay.innerHTML = 0;
        }else{
            scoreDisplay.innerHTML = score;
        }
        scoreDisplay.innerHTML = score;
    if(matchWords()){
      isplaying = true;
      time = currentLevel + 1;
      showWord(words);
      wordInput.value = '';
      score++;
    }

}

//Match currentWord to wordInput
function matchWords(){
    if(wordInput.value === currentword.innerHTML){
        message.innerHTML = 'Correct!!!';
        return true;
    }else{
        message.innerHTML = '';
        return false;
    }
}

//Pick and show random word
function showWord(words){
    //Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    //Output random word
    currentword.innerHTML = words[randIndex];
}

//countdown timer
function countdown(){
    //Make sure time is not run out
    if(time>0){
        //Decrement
        time--;
    }else if(time===0){
        isplaying = false;
    }
    //Show time 
    timeDisplay.innerHTML = time;
}

//check game status
function checkStatus(){
    if(!isplaying && time === 0){
        if(score!=-1)
            message.innerHTML = 'Game Over!!!';
        score = -1;
    }
}

















