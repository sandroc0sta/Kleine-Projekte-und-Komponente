let hand = [];
let houseHand = [];
let houseSum = 0;
let playerBusted = false;
let playerBlackjack = false;

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getCard = () => {
    const r = getRandom(2, 11);
    if (r === 11) return { face: "A", value: 11 };
    if (r === 10) {
        const faces = ["10", "J", "Q", "K"];
        const face = faces[Math.floor(Math.random() * faces.length)];
        return { face, value: 10 };
    }
    return { face: r.toString(), value: r };
};

const calculateSum = (cards) => {
    let sum = 0;
    let aces = 0;

    for (let card of cards) {
        sum += card.value;
        if (card.face === "A") aces++;
    }

    while (sum > 21 && aces > 0) {
        sum -= 10;
        aces--;
    }

    return sum;
};

const newCard = () => {
    const card = getCard();
    hand.push(card);
    updateDisplay();
};

const stay = () => {
    endPlayerTurn();
};

const endPlayerTurn = () => {
    const sum = calculateSum(hand);
    displayMessage("Player Total: " + sum, "yellow", "stay-msg");
    disableBtns();
    houseMove();
};

const disableBtns = () => {
    document.getElementById("newCard-btn").disabled = true;
    document.getElementById("stay-btn").disabled = true;
};

const startGame = () => {
    hand = [];
    houseHand = [];
    houseSum = 0;
    playerBusted = false;
    playerBlackjack = false;

    document.getElementById("cards-el").innerText = "Cards:";
    document.getElementById("sum-el").innerText = "Sum:";

    const msgs = ["bust-msg", "stay-msg", "house-msg", "house-bust-msg", "win-msg"];
    msgs.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.remove();
    });

    document.getElementById("newCard-btn").disabled = false;
    document.getElementById("stay-btn").disabled = false;
};

const houseMove = () => {
    if (playerBusted || playerBlackjack) return;

    while (houseSum < 17) {
        const card = getCard();
        houseHand.push(card);
        houseSum = calculateSum(houseHand);
    }

    displayMessage(
        "House: " + houseHand.map(c => c.face).join(" ") + " (Total: " + houseSum + ")",
        "orange",
        "house-msg"
    );

    checkWinner();
};

const checkWinner = () => {
    const playerSum = calculateSum(hand);

    if (playerBusted) {
        displayMessage("House wins!", "red", "win-msg");
        return;
    }

    if (playerBlackjack) {
        displayMessage("Blackjack! You win instantly!", "green", "win-msg");
        return;
    }

    if (houseSum > 21) {
        displayMessage("House Bust! You win!", "yellow", "house-bust-msg");
        return;
    }

    if (playerSum > houseSum) {
        displayMessage("You win!", "green", "win-msg");
    } else if (houseSum > playerSum) {
        displayMessage("House wins!", "red", "win-msg");
    } else {
        displayMessage("It's a tie!", "white", "win-msg");
    }
};

const displayMessage = (text, color, id = null) => {
    const msg = document.createElement("p");
    msg.innerText = text;
    msg.style.color = color;
    msg.style.fontSize = "20px";
    if (id) msg.id = id;
    document.getElementById("play-Area").appendChild(msg);
};

const updateDisplay = () => {
    const sum = calculateSum(hand);
    document.getElementById("cards-el").innerText = "Cards: " + hand.map(c => c.face).join(" ");
    document.getElementById("sum-el").innerText = "Sum: " + sum;

    if (sum === 21 && hand.length === 2 && !playerBlackjack) {
        playerBlackjack = true;
        disableBtns();
        displayMessage("Blackjack! You win instantly!", "green", "win-msg");
        return;
    }

    if (sum === 21 && hand.length > 2) {
        disableBtns();
        displayMessage("21 reached! Your turn ends.", "yellow", "stay-msg");
        houseMove();
        return;
    }

    if (sum > 21 && !playerBusted) {
        playerBusted = true;
        displayMessage("Bust!", "red", "bust-msg");
        disableBtns();
        houseMove();
    }
};
