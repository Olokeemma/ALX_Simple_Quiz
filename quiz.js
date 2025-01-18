// Function declaration for checkAnswer
function checkAnswer() {
  // Step 1: Declare the correct answer
  const correctAnswer = "4";  // The correct answer is "4"

  // Step 2: Retrieve the user's selected answer
  // Use querySelector to select the checked radio button with name="quiz"
  const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

  // Step 3: Compare the user's answer with the correct answer
  const feedbackElement = document.getElementById("feedback"); // Get the feedback element

  // Step 4: Check if the user has selected an answer
  if (!userAnswer) {
      feedbackElement.textContent = "Please select an answer.";  // If no answer is selected
      feedbackElement.style.color = "red";
  } else if (userAnswer === correctAnswer) {
      // Step 5: If the user's answer is correct
      feedbackElement.textContent = "Correct! Well done.";
      feedbackElement.style.color = "green";
  } else {
      // Step 6: If the user's answer is incorrect
      feedbackElement.textContent = "That's incorrect. Try again!";
      feedbackElement.style.color = "red";
  }
}

// Step 7: Add event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);

