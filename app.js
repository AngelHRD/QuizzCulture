const responses = ["c", "a", "b", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];
const results = document.querySelector("#results");

const check = () => {
  let score = 0;
  const Q1 = document.querySelector('input[name="Q1"]:checked').value;
  const Q2 = document.querySelector('input[name="Q2"]:checked').value;
  const Q3 = document.querySelector('input[name="Q3"]:checked').value;
  const Q4 = document.querySelector('input[name="Q4"]:checked').value;
  const Q5 = document.querySelector('input[name="Q5"]:checked').value;

  if (Q1 === responses[0]) {
    document.getElementById("quiz1").style.backgroundColor = "green";
    score++;
  } else {
    document.getElementById("quiz1").style.backgroundColor = "red";
  }
  if (Q2 === responses[1]) {
    document.getElementById("quiz2").style.backgroundColor = "green";
    score++;
  } else {
    document.getElementById("quiz2").style.backgroundColor = "red";
  }
  if (Q3 === responses[2]) {
    document.getElementById("quiz3").style.backgroundColor = "green";
    score++;
  } else {
    document.getElementById("quiz3").style.backgroundColor = "red";
  }
  if (Q4 === responses[3]) {
    document.getElementById("quiz4").style.backgroundColor = "green";
    score++;
  } else {
    document.getElementById("quiz4").style.backgroundColor = "red";
  }
  if (Q5 === responses[4]) {
    document.getElementById("quiz5").style.backgroundColor = "green";
    score++;
  } else {
    document.getElementById("quiz5").style.backgroundColor = "red";
  }

  if (Q1 === responses[0] && Q2 === responses[1] && Q3 === responses[2] && Q4 === responses[3] && Q5 === responses[4]) {
    results.textContent = "Bien joué, tu as ";
  } else {
    results.textContent = `Tu as eu ${score} bonne(s) réponse(s) sur 5`;
  }
};
