document.addEventListener("DOMContentLoaded", function () {
  const nameElement = document.getElementById("name");
  const nameText = nameElement.innerText;
  nameElement.innerHTML = "";

  nameText.split("").forEach((letter) => {
    const span = document.createElement("span");
    span.innerText = letter;
    nameElement.appendChild(span);
  });

  nameElement.addEventListener("mouseover", function (event) {
    if (event.target.tagName === "SPAN") {
      event.target.classList.add("letterBounce");
      event.target.addEventListener(
        "animationend",
        () => {
          event.target.classList.remove("letterBounce");
        },
        { once: true }
      );
    }
  });

  const iconsContainer = document.getElementById("icons-container");
  const icons = [
    "waveIcons/canada.svg", 
    "waveIcons/hockey.svg", 
    "waveIcons/italy.svg", 
    "waveIcons/rocket.svg", 
    "waveIcons/sailboat.svg", 
    "waveIcons/scotland.svg", 
  ]; 
  let iconIndex = 0;

  function createIcon() {
    const square = document.createElement("div");
    square.classList.add("square");

    const icon = document.createElement("img");
    icon.src = icons[iconIndex % icons.length];
    icon.classList.add("icon");

    square.appendChild(icon);
    iconsContainer.appendChild(square);
    iconIndex++;

    square.style.left = `${Math.floor(Math.random() * 35) + 1}%`;

    square.style.animation = `rotateSquare 4s ease-out forwards`;

    square.addEventListener("animationend", () => {
      square.remove();
    });
  }

  setInterval(createIcon, 2000);
});
