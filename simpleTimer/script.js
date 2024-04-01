const btn = document.getElementById("startBtn");
const counter = document.getElementById("counterText");

let count = 0;
let clickStart = true;

function start() {
  if (clickStart) {
    let timerForward = setInterval(() => {
      counter.textContent = ++count;

      if (count === 10) {
        clearInterval(timerForward);
        clickStart = false;
      }
    }, 500);
  } else {
    let timerBackword = setInterval(() => {
      counter.textContent = --count;

      if (count === 0) {
        clearInterval(timerBackword);
        clickStart = true;
      }
    }, 500);
  }
}
