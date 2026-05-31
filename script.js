const answerDisplay = document.getElementById("answer");
const questionInput = document.getElementById("userQuestion");
const getResponseBtn = document.getElementById("obtainAnswerBtn");

const API_URL = "https://decisions-api-v1.onrender.com/get-random-answer";

function getAnswer() {
  getResponseBtn.disabled = true;
  getResponseBtn.innerText = "Getting your answer...";

  fetch(API_URL)
    .then(response => {

      if (!response.ok) {
        throw new Error("something went wrong");
        return;
      }

      return response.json();
    })
    .then(answer => {
      let actualAnswer = answer["answer"];

      answerDisplay.innerText = actualAnswer;

      getResponseBtn.disabled = false;
    })
    .catch(error => {
      console.error(error);
      answerDisplay.innerText = error;

      getResponseBtn.disabled = false;
    })

  questionInput.value = "";
  getResponseBtn.innerText = "Get Answered";
}

getResponseBtn.addEventListener("click", getAnswer);
questionInput.addEventListener("input", () => {
  if (questionInput.value.length === 0) {
    getResponseBtn.disabled = true;
  }
  else {
    getResponseBtn.disabled = false;
  }
})