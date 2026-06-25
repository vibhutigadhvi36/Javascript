const eventDate = new Date("January 1, 2027 00:00:00").getTime();

const timer = document.getElementById("timer");

let countdown;

const updateCountdown = () => {

    const currentTime = new Date().getTime();

    const distance = eventDate - currentTime;

    if (distance <= 0) { 

        clearInterval(countdown);

        timer.innerHTML =
        "Time's up! The event has started 🎉";

        return;
    }

    const days =
    Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours =
    Math.floor((distance %
    (1000 * 60 * 60 * 24))
    / (1000 * 60 * 60));

    const minutes =
    Math.floor((distance %
    (1000 * 60 * 60))
    / (1000 * 60));

    const seconds =
    Math.floor((distance %
    (1000 * 60))
    / 1000);

    timer.innerHTML =
    `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
};

const startCountdown = () => {

    clearInterval(countdown);

    countdown = setInterval(updateCountdown, 1000);

    updateCountdown();
};

const pauseCountdown = () => {
    clearInterval(countdown);
};

document
.getElementById("startBtn")
.addEventListener("click", startCountdown);

document
.getElementById("pauseBtn")
.addEventListener("click", pauseCountdown);

startCountdown();

const quotes = [

    "Success is not final, failure is not fatal: It is the courage to continue that counts.",

    "Dream big and dare to fail.",

    "Push yourself because no one else is going to do it for you.",

    "Believe you can and you're halfway there.",

    "Stay positive, work hard, make it happen.",

    "Your future is created by what you do today."
];

let quoteIndex = 0;

const quoteElement =
document.getElementById("quote");

const showQuote = () => {

    quoteElement.textContent =
    quotes[quoteIndex];
};

showQuote();

const autoSlider = setInterval(() => {

    quoteIndex++;

    if (quoteIndex >= quotes.length) {
        quoteIndex = 0;
    }

    showQuote();

}, 4000);

document
.getElementById("nextBtn")
.addEventListener("click", () => {

    quoteIndex++;

    if (quoteIndex >= quotes.length) {
        quoteIndex = 0;
    }

    showQuote();
});

document
.getElementById("prevBtn")
.addEventListener("click", () => {

    quoteIndex--;

    if (quoteIndex < 0) {
        quoteIndex = quotes.length - 1;
    }

    showQuote();
});

const modal =
document.getElementById("modal");

const closeBtn =
document.getElementById("closeBtn");

setTimeout(() => {

    modal.style.display = "block";

}, 5000);

closeBtn.addEventListener("click", () => {

    modal.style.display = "none";
});

window.addEventListener("click", (event) => {

    if(event.target === modal){

        modal.style.display = "none";
    }
});