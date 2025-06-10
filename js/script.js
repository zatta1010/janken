const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

const DOM = {
    グー: $('#rock'),
    パー: $('#paper'),
    チョキ: $('#scissors'),
    message: $('#message'),
    userHand: $('#user-hand'),
    computerHand: $('#computer-hand')
};

function getRandomHand() {
    const hands = ['グー', 'パー', 'チョキ'];
    return hands[Math.floor(Math.random() * hands.length)];
}

function playGame(userHand) {
    const computerHand = getRandomHand();
    DOM.userHand.textContent = userHand;
    DOM.computerHand.textContent = computerHand;

    if (userHand === computerHand) {
        DOM.message.textContent = "あいこです！";
    } else if (
        (userHand === 'グー' && computerHand === 'チョキ') ||
        (userHand === 'パー' && computerHand === 'グー') ||
        (userHand === 'チョキ' && computerHand === 'パー')
    ) {
        DOM.message.textContent = "あなたの勝ちです！";
    } else {
        DOM.message.textContent = "あなたの負けです！";
    }
}

function setupEventListeners() {
    DOM.グー.addEventListener('click', () => playGame('グー'));
    DOM.パー.addEventListener('click', () => playGame('パー'));
    DOM.チョキ.addEventListener('click', () => playGame('チョキ'));
}

document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    DOM.message.textContent = "じゃんけんを始めましょう！";
    DOM.userHand.textContent = "";
});
