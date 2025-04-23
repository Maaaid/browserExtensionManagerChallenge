// @ts-nocheck
// DARK MODE GESTION :

const lightModeToggle = document.querySelector(".toggleNightModeButton");
const lightModeButton = document.querySelector(".toggleNightMode");

lightModeToggle.addEventListener("click", () => {
  if (document.body.classList.contains("light")) {
    lightModeButton.src = "/assets/images/icon-sun.svg";
    document.body.classList.remove("light");
    localStorage.setItem("darkMode", "false");
  } else {
    document.body.classList.add("light");
    lightModeButton.src = "/assets/images/icon-moon.svg";
    localStorage.setItem("darkMode", "true");
  }
});

// Check local storage for dark mode preference
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("light");
  lightModeButton.src = "/assets/images/icon-moon.svg";
} else {
  document.body.classList.remove("light");
  lightModeButton.src = "/assets/images/icon-sun.svg";
}

// REMOVE EXTENSION GESTION :

window.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".extensionsList");
  const removeButton = document.querySelectorAll(".extensionsRemove");

  container.addEventListener("click", (event) => {
    const clickedRemoveButton = event.target.closest(".extensionsRemove");
    if (clickedRemoveButton) {
      const extension = clickedRemoveButton.closest(".extensions");
      if (extension) {
        container.removeChild(extension);
      }
    }
  });
});
