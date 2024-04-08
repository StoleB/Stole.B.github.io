let flippedCard = null;
let matchedCards = [];
let moves = 0;
let timerInterval;
let seconds = 0;
let minutes = 0;

function startTimer() {
    timerInterval = setInterval(function () {
        seconds++;
        if (seconds == 60) {
            minutes++;
            seconds = 0;
        }
        updateTimer();
    }, 1000);
}

function updateMovesCounter(event) {
    if (event.target.id !== 'reset-btn') {
        moves++;
        document.getElementById('moves-counter').textContent = moves;
    }
}

function updateTimer() {
    const timerDisplay = document.getElementById('timer');
    timerDisplay.textContent = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}

function stopTimer() {
    clearInterval(timerInterval);
}

function disableMatchedCards() {
    matchedCards.forEach(function (card) {
        card.removeEventListener('click', cardClickHandler);
    });
}

function cardClickHandler() {
    if (!flippedCard) {
        flippedCard = this;
        this.style.transform = 'rotateY(180deg)';
        if (moves === 0) {
            startTimer();
        }
    } else {
        this.style.transform = 'rotateY(180deg)';
        if (this.querySelector('.back-face').alt === flippedCard.querySelector('.back-face').alt) {
            matchedCards.push(this, flippedCard);
            flippedCard = null;
            disableMatchedCards();
            if (matchedCards.length === document.querySelectorAll('.card').length) {
                stopTimer();
            }
        } else {
            setTimeout(() => {
                this.style.transform = 'rotateY(0deg)';
                flippedCard.style.transform = 'rotateY(0deg)';
                flippedCard = null;
            }, 1000);
        }
    }
    updateMovesCounter(event);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function resetGame() {
  stopTimer();
  flippedCard = null;
  matchedCards = [];
  moves = 0;
  seconds = 0;
  minutes = 0;
  updateTimer();
  moves = 0;
  document.getElementById('moves-counter').textContent = moves;
  
  const cardsContainer = document.querySelector('.container');
  const cards = Array.from(cardsContainer.querySelectorAll('.memory-game'));
  shuffle(cards);
  cardsContainer.innerHTML = '';
  cards.forEach(card => cardsContainer.appendChild(card));
  
  document.querySelectorAll('.card').forEach(function (card) {
      card.style.transform = 'rotateY(0deg)';
      card.addEventListener('click', cardClickHandler);
  });
}

document.getElementById('reset-btn').addEventListener('click', resetGame);

document.querySelectorAll('.card').forEach(function (selectedCard) {
    selectedCard.addEventListener('click', cardClickHandler);
});
