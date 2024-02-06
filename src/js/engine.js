const emojis = [
    "🐱‍🐉",
    "🐱‍🐉",
    "🐱‍👓",
    "🐱‍👓",
    "🐱‍🚀",
    "🐱‍🚀",
    "🧛‍♀️",
    "🧛‍♀️",
    "🧙‍♂️",
    "🧙‍♂️",
    "🧟‍♀️",
    "🧟‍♀️",
    "🧚‍♂️",
    "🧚‍♂️",
    "🎃",
    "🎃",
];

let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++) {
    let box =  document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onlick = handleClick();
    document.querySelector('.game').appendChild(box);
}

const handleClick = () => {
    if(openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if(openCards.length == 2) {
        setTimeout(checkMatch, 500);
    }
};

const checkMatch = () => {
    
};