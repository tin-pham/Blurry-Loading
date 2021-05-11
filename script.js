const counter = document.querySelector('.counter');
const background = document.querySelector('.background');

let counterNumber = 0;

let timeOutId = setInterval(blurBackground, 30);

function blurBackground() {
  counterNumber++;

  counter.innerHTML = `${counterNumber}%`;
  counter.style.opacity = scale(counterNumber, 0, 100, 1, 0);

  background.style.filter = `blur(${scale(counterNumber, 0, 100, 30, 0)}px)`;
  if (counterNumber == 100) {
    clearInterval(timeOutId);
  }
}

// Map a range of number to another range
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
