/* 🎁 Gift Reveal */
function showLoveNotes() {
    let giftBoxes = document.querySelectorAll('.gift-box');
    let messageBox = document.getElementById("gift-message");
    let messages = ["💖 You are my sunshine!", "🌹 Thank you for everything!", "💕 I love you forever!"];

    giftBoxes.forEach((box, index) => {
        setTimeout(() => {
            box.classList.add("opened");

            let newMessage = document.createElement("p");
            newMessage.innerHTML = messages[index];
            messageBox.appendChild(newMessage);
            messageBox.style.display = "block";
        }, index * 1000);
    });
}

/* 🎮 Memory Game */
let memoryCards = ["💖", "💖", "🌹", "🌹", "🎁", "🎁", "🎉", "🎉"];
let shuffledCards = [];
let selectedCards = [];
let matchedPairs = 0;

function startMemoryGame() {
    let gameContainer = document.getElementById("game-container");
    gameContainer.style.display = "block";
    gameContainer.innerHTML = "<h3>🧠 Memory Game</h3><div class='memory-grid' id='memory-grid'></div>";

    shuffledCards = memoryCards.sort(() => 0.5 - Math.random());
    let grid = document.getElementById("memory-grid");

    shuffledCards.forEach((emoji, index) => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.dataset.index = index;
        card.addEventListener("click", () => flipCard(card, emoji));
        grid.appendChild(card);
    });
}

function flipCard(card, emoji) {
    if (selectedCards.length < 2 && !card.classList.contains("matched")) {
        card.innerHTML = emoji;
        selectedCards.push({ card, emoji });

        if (selectedCards.length === 2) {
            setTimeout(checkMatch, 500);
        }
    }
}

function checkMatch() {
    if (selectedCards[0].emoji === selectedCards[1].emoji) {
        selectedCards.forEach(({ card }) => card.classList.add("matched"));
    } else {
        selectedCards.forEach(({ card }) => (card.innerHTML = ""));
    }
    selectedCards = [];
}

/* 💖 Clicker Game */
let clickCount = 0;

function startClickerGame() {
    document.getElementById("game-container").innerHTML = "<h3>💖 Clicker Challenge</h3><button onclick='clickCount++'>💖 Click Me!</button><p>Score: <span id='score'>0</span></p>";
    setInterval(() => document.getElementById("score").textContent = clickCount, 100);
}
