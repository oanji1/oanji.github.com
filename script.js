const wrapper = document.querySelector(".wrapper");

const question = document.querySelector(".question");

const img = document.querySelector(".img");

const yesBtn = document.querySelector(".yes-btn"); const noBtn = document.querySelector(".no-btn");

const secondQuestion = document.querySelectorAll(".question")[1];

yesBtn.addEventListener("click", () => {

question.innerHTML = "I like you";

secondQuestion.innerHTML = "How about you?";

img.src =

})https://raw.githubusercontent.com/DzarelDeveloper/Img/main/AskCrush1.png";

noBtn.addEventListener("mouseover", () => {

const noBtnRect = noBtn.getBoundingClientRect();

const maxX = window.innerWidth - noBtnRect.width;

const maxy = window.innerHeight noBtnRect.height;

ath.floor(Math.random()* maxx); const randomX = Math.floor(Math.

const randomY = Math.floor(Math.random() * maxY);

noBtn.style.left = randomX + "px";

noBtn.style.top = randomY + "px";

});