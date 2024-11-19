const responses = ["c", "a", "b", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];
const results = document.querySelector("#results");

const check = () => {
  let score = 0;
  //   const Q1 = document.querySelector('input[name="Q1"]:checked').value;
  //   const Q2 = document.querySelector('input[name="Q2"]:checked').value;
  //   const Q3 = document.querySelector('input[name="Q3"]:checked').value;
  //   const Q4 = document.querySelector('input[name="Q4"]:checked').value;
  //   const Q5 = document.querySelector('input[name="Q5"]:checked').value;
  const quizText = document.querySelector("#quiz-text");
  //   const feeback = document.querySelector("#pFeedback");

  // Vérification des réponses
  for (i = 1; i < 6; i++) {
    if (document.querySelector('input[name="Q' + i + '"]:checked').value === responses[i - 1]) {
      document.getElementById("quiz" + i).style.backgroundColor = "green";
      score++;
    } else {
      document.getElementById("quiz" + i).style.backgroundColor = "red";
    }
  }

  // Définir l'emoji correspondant au score
  let emoji = emojis[5 - score];

  // Mise à jour de `quizText` en fonction du score
  if (score === 5) {
    quizText.textContent = `${emoji} Bravo, c'est un sans faute ! ${emoji}`;
    // feeback.textContent = "Quelle culture...";
  } else if (score === 4) {
    quizText.textContent = `${emoji} Vous y êtes presque ! ${emoji}`;
  } else if (score === 3) {
    quizText.textContent = `${emoji} Vous êtes à mi-chemin ${emoji}`;
  } else if (score === 2) {
    quizText.textContent = `${emoji} Y'a du laisser aller ${emoji}`;
  } else {
    quizText.textContent = `${emoji} Peut mieux faire ${emoji}`;
  }
  results.textContent = `${score}/5`;
};

//! METHODE GROS PORC

//   if (Q1 === responses[0]) {
//     document.getElementById("quiz1").style.backgroundColor = "green";
//     score++;
//   } else {
//     document.getElementById("quiz1").style.backgroundColor = "red";
//   }

//   if (Q2 === responses[1]) {
//     document.getElementById("quiz2").style.backgroundColor = "green";
//     score++;
//   } else {
//     document.getElementById("quiz2").style.backgroundColor = "red";
//   }

//   if (Q3 === responses[2]) {
//     document.getElementById("quiz3").style.backgroundColor = "green";
//     score++;
//   } else {
//     document.getElementById("quiz3").style.backgroundColor = "red";
//   }

//   if (Q4 === responses[3]) {
//     document.getElementById("quiz4").style.backgroundColor = "green";
//     score++;
//   } else {
//     document.getElementById("quiz4").style.backgroundColor = "red";
//   }

//   if (Q5 === responses[4]) {
//     document.getElementById("quiz5").style.backgroundColor = "green";
//     score++;
//   } else {
//     document.getElementById("quiz5").style.backgroundColor = "red";
//   }
