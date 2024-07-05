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
    const icon = document.createElement("img");
    icon.src = icons[iconIndex % icons.length];
    icon.classList.add("icon");
    icon.style.left = `${Math.random() * 90 + 5}%`; 
    iconsContainer.appendChild(icon);
    iconIndex++;

    icon.addEventListener("animationend", () => {
      icon.remove();
    });
  }

  setInterval(createIcon, 2000);
});
