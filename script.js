import { Progress } from "./progress/script.js";

const progressContainer = document.querySelector(
  ".progress-section__progress-container"
);
const progress = new Progress(progressContainer);

const valueInput = document.getElementById("value");
const animateCheckbox = document.getElementById("animate");
const hideCheckbox = document.getElementById("hide");

valueInput.addEventListener("input", (e) => {
  const valueInInput = e.target.value;
  const numberValue = Number(valueInInput);
  let resultValue;

  if (isNaN(numberValue)) {
    resultValue = 0;
  } else {
    resultValue = Math.min(Math.max(numberValue, 0), 100);
  }

  valueInput.value = resultValue;
  progress.setProgress(resultValue);
});

animateCheckbox.addEventListener("change", (e) => {
  progress.setAnimation(e.target.checked);
});

hideCheckbox.addEventListener("change", (e) => {
  progress.setVisibility(e.target.checked);
});
