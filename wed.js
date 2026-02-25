function nextPage(pageNumber) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById("page" + pageNumber).classList.add("active");

    if (pageNumber === 2) {
        startFireworks();
    }
}

/* ❤️ Create Floating Hearts */
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 500);


/* ⏳ Countdown Timer */
function startCountdown() {
    const weddingDate = new Date("April 30, 2026 10:30:00").getTime();

    setInterval(function() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;

    }, 1000);
}

startCountdown();