const accord1 = document.querySelector(".acord1");
const accord2 = document.querySelector(".acord2");
const accord3 = document.querySelector(".acord3");

let toggle1 = false;
let toggle2 = false;
let toggle3 = false;

accord1.addEventListener("click", () => {
    if (toggle1 === false) {
        accord1.style.height = "8rem";
        toggle1 = true;
    } else {
        accord1.style.height = "3.4rem";
        toggle1 = false;
    }
});

accord2.addEventListener("click", () => {
    if (toggle2 === false) {
        accord2.style.height = "8rem";
        toggle2 = true;
    } else {
        accord2.style.height = "3.4rem";
        toggle2 = false;
    }
});

accord3.addEventListener("click", () => {
    if (toggle3 === false) {
        accord3.style.height = "8rem";
        toggle3 = true;
    } else {
        accord3.style.height = "3.4rem";
        toggle3 = false;
    }
});

const claim = document.querySelector("section.hero button.claim");
const inf = document.querySelector("button.inf");
const claim_sec = document.querySelector("section.claim").getBoundingClientRect();
const info = document.querySelector("section.what").getBoundingClientRect();

claim.addEventListener("click", () => {
    window.scroll(0, claim_sec.top);
});

inf.addEventListener("click", () => {
    window.scroll(0, info.top);
});

const close = document.querySelectorAll(".close");
const splash = document.querySelector(".exe .exe1");
const subs = document.querySelector(".exe .exe2");
const sales = document.querySelector(".exe .exe3");

close.forEach((e) => {
    e.addEventListener("click", () => {
        document.querySelector(".overlay").style.display = "none";
    });
});

splash.addEventListener("click", () => {
    document.querySelector(".overlay").style.display = "flex";
    document.querySelector(".overlay .subscription").style.display = "none";
    document.querySelector(".overlay .sales").style.display = "none";
    document.querySelector(".overlay .splash").style.display = "block";
});

subs.addEventListener("click", () => {
    document.querySelector(".overlay").style.display = "flex";
    document.querySelector(".overlay .splash").style.display = "none";
    document.querySelector(".overlay .sales").style.display = "none";
    document.querySelector(".overlay .subscription").style.display = "block";
});

sales.addEventListener("click", () => {
    document.querySelector(".overlay").style.display = "flex";
    document.querySelector(".overlay .subscription").style.display = "none";
    document.querySelector(".overlay .splash").style.display = "none";
    document.querySelector(".overlay .sales").style.display = "block";
});
