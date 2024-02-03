
document.getElementById("survey-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Collect survey answers
    var formData = new FormData(this);
    var answers = [];
    for (var pair of formData.entries()) {
      answers.push(pair[1]);
    }
  
    // Determine the most popular answer
    var answerCounts = {};
    var maxCount = 0;
    var maxAnswers = [];
  
    for (var i = 0; i < answers.length; i++) {
      var answer = answers[i];
      if (answerCounts[answer]) {
        answerCounts[answer]++;
      } else {
        answerCounts[answer] = 1;
      }
  
      if (answerCounts[answer] > maxCount) {
        maxCount = answerCounts[answer];
        maxAnswers = [answer];
      } else if (answerCounts[answer] === maxCount) {
        maxAnswers.push(answer);
      }
    }
  
    // Store the results in session storage
    sessionStorage.setItem("maxAnswers", JSON.stringify(maxAnswers));
  
    // Redirect to the results page
    window.location.href = "results.html";
  });