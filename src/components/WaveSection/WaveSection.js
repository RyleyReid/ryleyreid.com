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
  });
  