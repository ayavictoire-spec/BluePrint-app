const checkboxes = document.querySelectorAll("input[type='checkbox']");
const scoreText = document.getElementById("score");

const STORAGE_KEY = "blueprint-progress";

function calculateScore() {
  const total = checkboxes.length;
  let checked = 0;

  checkboxes.forEach(cb => {
    if (cb.checked) checked++;
  });

  return Math.round((checked / total) * 100);
}

function updateUI() {
  const score = calculateScore();
  scoreText.textContent = score + "%";

  saveProgress();
}

function saveProgress() {
  const state = Array.from(checkboxes).map(cb => cb.checked);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadProgress() {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (saved && saved.length === checkboxes.length) {
    checkboxes.forEach((cb, i) => {
      cb.checked = saved[i];
    });
  }

  scoreText.textContent = calculateScore() + "%";
}

checkboxes.forEach(cb => {
  cb.addEventListener("change", updateUI);
});

loadProgress();
