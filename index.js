const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
// console.log(num1);

const formEl = document.getElementById("form");

const quesEl = document.getElementById("question");
quesEl.innerText = `what is ${num1} multiply by ${num2}?`;

const inputEl = document.getElementById("input");

const scoreEl = document.getElementById("score");

// let score = 0;

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}
scoreEl.innerText = `score:${score}`;

const correctAnswer = num1 * num2;

formEl.addEventListener("submit", () => {
  const userAnswer = +inputEl.value;
  //   console.log(userAnswer, typeof userAnswer);
  if (userAnswer === correctAnswer) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
