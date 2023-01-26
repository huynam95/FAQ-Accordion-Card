"use strict";

const btns = document.querySelectorAll(".btn");
const questions = document.querySelectorAll(".question");
const questionAnswers = document.querySelectorAll(".question-answer");

let currentQuestion = document.querySelector(".q1");

const clicked = function (e) {
  const clicked = e.target.closest(".question").children[0].children[0];
  const numb = clicked.dataset.tab;
  const temp = document.querySelector(`.q${numb}`);

  if (temp !== currentQuestion) {
    const answer = currentQuestion.children[1];
    answer.classList.add("hidden");
    currentQuestion.children[0].classList.remove("show");

    currentQuestion = temp;

    const answer2 = currentQuestion.children[1];
    answer2.classList.toggle("hidden");
    currentQuestion.children[0].classList.add("show");
  } else {
    const answer = currentQuestion.children[1];
    answer.classList.toggle("hidden");
    currentQuestion.children[0].classList.toggle("show");
  }
};

questions.forEach((question) => {
  question.addEventListener("click", clicked);
});
