document.getElementById("submitQuestion").onclick = function () {
  const userQ = document.getElementById("userQuestion").value.toLowerCase();
  let answer = "Sorry, I couldn't find an answer. Please contact the scholarship office for help.";

  for (const key in qnaDB) {
    if (userQ.includes(key)) {
      answer = qnaDB[key];
      break;
    }
  }
  document.getElementById("answerArea").innerText = answer;
};

// Dynamically generate buttons
const container = document.getElementById("dynamic-buttons");
for (const key in qnaDB) {
  const btn = document.createElement("button");
  btn.className = "kiosk-btn";
  btn.setAttribute("data-type", key);
  btn.innerText = key.charAt(0).toUpperCase() + key.slice(1);

  const answerDiv = document.createElement("div");
  answerDiv.className = "answer-box";

  container.appendChild(btn);
  container.appendChild(answerDiv);

  btn.addEventListener("click", () => {
    document.querySelectorAll(".answer-box").forEach(box => box.innerText = "");
    answerDiv.innerText = qnaDB[key];
  });
}

// Live search filter for kiosk buttons
document.getElementById("searchBox").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const buttons = document.querySelectorAll(".kiosk-btn");

  buttons.forEach(btn => {
    const match = btn.textContent.toLowerCase().includes(query);
    const answerBox = btn.nextElementSibling;
    btn.style.display = match ? "block" : "none";
    if (answerBox && answerBox.classList.contains("answer-box")) {
      answerBox.style.display = match ? "block" : "none";
    }
  });
});
