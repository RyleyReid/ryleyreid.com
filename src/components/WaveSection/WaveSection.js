document.addEventListener("DOMContentLoaded", function () {
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
  let forwardIcon = null;
  let backwardIcon = null;

  function createIcon(isForward) {
    const square = document.createElement("div");
    square.classList.add("square");

    const icon = document.createElement("img");
    icon.src = icons[iconIndex % icons.length];
    icon.classList.add("icon");

    square.appendChild(icon);
    iconsContainer.appendChild(square);
    iconIndex++;

    // Determine spawn range
    if (isForward) {
      square.style.left = `${Math.floor(Math.random() * 17) + 1}%`; // Front half
    } else {
      square.style.left = `${Math.floor(Math.random() * 17) + 18}%`; // Back half
    }

    square.style.animation = `rotateSquare 4s ease-out forwards`;

    square.addEventListener("animationend", () => {
      square.remove();
      if (isForward) {
        forwardIcon = null;
      } else {
        backwardIcon = null;
      }
    });

    return square;
  }

  function spawnIcons() {
    if (!forwardIcon) {
      forwardIcon = createIcon(true);
    }
    setTimeout(() => {
      if (!backwardIcon) {
        backwardIcon = createIcon(false);
      }
    }, 1500); // Delay for half the icon's lifetime (2s total lifetime)
  }

  // Spawn icons at staggered intervals
  setInterval(spawnIcons, 1500);
});
