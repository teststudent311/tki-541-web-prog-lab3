let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const funnelContainer = document.getElementById('funnel-container');

function createRandomNumber() {
    const numberElement = document.createElement('div');
    numberElement.className = 'number';
    numberElement.textContent = Math.floor(Math.random() * 100) + 1;
    funnelContainer.appendChild(numberElement);
    setTimeout(() => {
        funnelContainer.removeChild(numberElement);
    }, 5000);
}

setInterval(createRandomNumber, 500);

function checkGuess() {
    const userGuess = Number(document.getElementById('userGuess').value);
    const hint = document.getElementById('hint');
    attempts++;

    if (userGuess < secretNumber) {
        hint.textContent = 'Загаданное число больше!';
    } else if (userGuess > secretNumber) {
        hint.textContent = 'Загаданное число меньше!';
    } else {
        hint.textContent = `Поздравляем! Вы угадали число с ${attempts} попыток!`;
        document.getElementById('restartButton').style.display = 'block';
    }
}

function restartGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('hint').textContent = '';
    document.getElementById('userGuess').value = '';
    document.getElementById('restartButton').style.display = 'none';
}
