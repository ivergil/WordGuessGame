let possibleWords = ["cat", "dog", "lizard", "bear"]
let currentWord = ''
let wins = 0
let guessesRemaining = 6
let lettersGuessed = ['c', 'a', 't']

function initGame() {
    assignCurrentWord()
    setEventListener()
    updateDOM()
    checkIfUserLost()
}

initGame()

function checkIfUserLost(){
    if(guessesRemaining <= 0){
        alert("You Lost!!!")
    }
}

function WordHasBeenGuessed(currentWord, lettersGuessed){
    for(let i = 0; i < currentWord.length; i++){
        if(lettersGuessed.includes(currentWord[i])){

        } else {
            return false
        }
    }
}

function assignCurrentWord(){
    const index =Math.florr(Math.random() * ((possibleWords.length -1) - 0 + 1)) + 0;
    currentWord = possibleWords[index]
}

function setEventListener(){
    document.onkeyup = function(e){
        lettersGuessed.push(e.key)
        if(WordHasBeenGuessed()){
            wins++
            document.getElementById("wins-count").textContent = wins
        }
        shouldGuessedGoDown(e.key)
        updateDOM()
    }
}

function shouldGuessedGoDown(lettersGuessed){
    if(!currentWord.includes(lettersGuessed)){
        guessesRemaining--
    }
}
function updateDOM(){
    document.getElementById("guesses-remaining").textContent = guessesRemaining
    document.getElementById("letters-guessed").textContent = lettersGuessed
    showLettersOrDashes()
}

function showLettersOrDashes(){
    let displayWord = ""
    for(let i=0; i<currentWord.length; i++){
        if(lettersGuessed.includes(currentWord[i])){
            displayWord = displayWord + currentWord[i] + " "
        }else{
            displayWord = displayWord + "_" + " "
        }
    }
    document.getElementById("display-word").textContent = displayWord
}