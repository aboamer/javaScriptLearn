let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxnNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

game.addEventListener('mousedown', function (e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
})

minNum.textContent = min;
maxnNum.textContent = max;

guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`please enter a value between ${min} and ${max}`, 'red');
    }

    if (guess === winningNum) {
        gameOver(`${winningNum} is correct`, 'green');
    }
    else {
        guessesLeft -= 1;
        if (guessesLeft === 0) {
            gameOver(`game over, ${winningNum} was the correct number`, 'red');
        }
        else {
            guessInput.style.borderColor = 'red';
            guessInput.value = '';
            setMessage(`${guess} is not correct, ${guessesLeft} left`, 'red');
        }
    }
});

function gameOver(message, color) {
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    setMessage(message, color);

    guessBtn.value = 'Play again?';
    guessBtn.className += 'play-again';
}

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}