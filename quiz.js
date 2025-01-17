// Get elements from the HTML
const submitButton = document.getElementById("submit-answer");
const feedbackElement = document.getElementById("feedback");
const choices = document.getElementsByName("quiz");

// Function to check the answer
function checkAnswer() {
    let userAnswer = null;

    // Find the selected radio button
    for (let i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            userAnswer = choices[i].value;
        }
    }

    // Provide feedback based on the answer
    if (userAnswer === null) {
        feedbackElement.textContent = "Please select an answer.";
        feedbackElement.style.color = "red";
    } else if (userAnswer === "4") {
        feedbackElement.textContent = "Correct! 2 + 2 = 4";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = "Incorrect. Please try again!";
        feedbackElement.style.color = "red";
    }
}

// Add event listener to the submit button
submitButton.addEventListener("click", checkAnswer);
