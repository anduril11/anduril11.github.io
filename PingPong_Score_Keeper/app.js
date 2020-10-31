const selectMax = document.querySelector('#maxScore');
const p1 = {
    button: document.querySelector('#playerOne'),
    display: document.querySelector('#p1Score'),
    score: 0
};
const p2 = {
    button: document.querySelector('#playerTwo'),
    display: document.querySelector('#p2Score'),
    score: 0
};
const resetButton = document.querySelector('#reset');
let isGameOver = false;
let maxScore = parseInt(selectMax.value);

p1.button.addEventListener('click', () => {
    addPoint(p1, p2);
});

p2.button.addEventListener('click', () => {
    addPoint(p2, p1);
});

// keyboard shortcut
window.addEventListener('keydown', (e) => {
    if (e.key === '1'){
        addPoint(p1, p2);
    } else if (e.key === '2'){
        addPoint(p2, p1);
    } else if (e.code === 'KeyR'){
        reset();
    };
});


selectMax.addEventListener('change', () => {
    maxScore = parseInt(selectMax.value);
});

resetButton.addEventListener('click', reset);

function addPoint (player, opponent) {
    if (!isGameOver){
        player.score += 1;
        updateScore();
        if (player.score === maxScore){
            player.display.classList.add('winner');
            opponent.display.classList.add('loser');
            isGameOver = true;
            p1.button.setAttribute('disabled','');
            p2.button.setAttribute('disabled','');
        }
    }
}

function updateScore () {
    for (let player of [p1,p2]){
        player.display.textContent = player.score;
    }
}

function reset () {
    p1.score = 0;
    p2.score = 0;
    updateScore();
    p1.display.classList.remove('winner','loser');
    p2.display.classList.remove('winner','loser');
    p1.button.removeAttribute('disabled');
    p2.button.removeAttribute('disabled');
    isGameOver = false;
}