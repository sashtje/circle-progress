export class Progress {
  #circleRadius = 54;
  #circumference = 2 * Math.PI * this.#circleRadius;
  #container = null;
  #namespace = "http://www.w3.org/2000/svg";
  #svg = document.createElementNS(this.#namespace, "svg");
  #circleBackground = document.createElementNS(this.#namespace, "circle");
  #circleProgress = document.createElementNS(this.#namespace, "circle");

  constructor(container) {
    this.#container = container;

    this.#setMarkup();
  }

  #setMarkup() {
    this.#svg.classList.add("progress-circle");
    this.#svg.setAttribute("width", "120");
    this.#svg.setAttribute("height", "120");
    this.#svg.setAttribute("viewBox", "0 0 120 120");

    this.#circleBackground.classList.add("progress-circle__background");
    this.#circleBackground.setAttribute("cx", "60");
    this.#circleBackground.setAttribute("cy", "60");
    this.#circleBackground.setAttribute("r", "54");

    this.#circleProgress.classList.add("progress-circle__progress");
    this.#circleProgress.setAttribute("cx", "60");
    this.#circleProgress.setAttribute("cy", "60");
    this.#circleProgress.setAttribute("r", "54");

    this.#circleProgress.style.strokeDasharray = this.#circumference;
    this.#circleProgress.style.strokeDashoffset = this.#circumference;

    this.#svg.append(this.#circleBackground);
    this.#svg.append(this.#circleProgress);
    this.#container.append(this.#svg);
  }

  setProgress(value) {
    if (isNaN(value)) {
      console.error(
        "value for setting progress should be a number between 0 and 100"
      );
      return;
    }

    const offset = this.#circumference - (value / 100) * this.#circumference;
    this.#circleProgress.style.strokeDashoffset = offset;
  }

  setAnimation(animationActive) {
    if (animationActive) {
      this.#svg.classList.add("animated");
    } else {
      this.#svg.classList.remove("animated");
    }
  }

  setVisibility(hidden) {
    if (hidden) {
      this.#svg.style.display = "none";
    } else {
      this.#svg.style.display = "block";
    }
  }
}
