function submitQuiz() {


  const answers = {
    q1: { correct: "b", explanation: "HTML = Hyper Text Markup Language. It’s basically the skeleton of web pages." },
    q2: { correct: "c", explanation: "JS was created at Netscape in 1995 to make web pages interactive." },
    q3: { correct: "b", explanation: "PostgreSQL is relational. The others (Mongo, Cassandra, Redis) are NoSQL." },
    q4: { correct: "b", explanation: "Overfitting = model memorizes training data, then fails on new stuff." },
    q5: { correct: "c", explanation: " CSS = Cascading Style Sheets, used for styling." }
  }

  let userScore = 0
  let total = Object.keys(answers).length

  let resultText = ""

  for (let q in answers) {
    let selected = document.querySelector(`input[name=${q}]:checked`)
    if (selected) {
      if (selected.value === answers[q].correct) {
        userScore++

        resultText += `<p class="correct">${q.toUpperCase()} ✔ Correct</p>`
      } else {
        resultText += `<p class="wrong">${q.toUpperCase()} ✘ Wrong. Correct answer: ${answers[q].correct.toUpperCase()}<br><span>${answers[q].explanation}</span></p>`
      }

    } else {
      resultText += `<p class="wrong">${q.toUpperCase()} Not answered. Correct answer: ${answers[q].correct.toUpperCase()}<br><span>${answers[q].explanation}</span></p>`
    }
  }



  //console.log("Score :", userScore);
  
  document.getElementById("result").innerHTML = `You scored ${userScore} / ${total}<br>` + resultText

}
