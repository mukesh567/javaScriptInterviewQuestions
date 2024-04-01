let progress = document.querySelector(".progress");
let progressLabel = document.querySelector(".progress-label");
let startBtn = document.querySelector(".start");

function handleClick() {
  let value = 0;
  let interval;

  interval = setInterval(() => {
    if (value == 90) {
      clearInterval(interval);
    }
    value += 10;

    progress.style.width = `${value}%`;
    progressLabel.innerText = `${value}%`;
  }, 1000);
}

startBtn.addEventListener("click", () => {
  handleClick();
});
