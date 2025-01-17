let feedback = document.getElementById("feedback");

let button = document.getElementById("submit-answer");



function checkAnswer() {

  let selectedOption = document.querySelector('input[name="quiz"]:checked');
  

  
  const correctAnswer = "4"

  if (selectedOption){

    let userAnswer = selectedOption.value;

    if(userAnswer === correctAnswer){
      feedback.textContent = "Correct! Well done."
      feedback.style.color = "green"
    }else{
      feedback.textContent = "That's incorrect. Try again!"
      feedback.style.color = "red"
    }

  }else {
      feedback.textContent = "Please choose an answer"
      feedback.style.color = "red"
  }

}


button.addEventListener("click", function(){

  checkAnswer()
})




