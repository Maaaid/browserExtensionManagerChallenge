// @ts-nocheck
const container = document.querySelector(".extensionsList");
const filterButton = document.querySelectorAll(".filterOptions");

fetch("http://localhost:3000/api/extensions")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((extension, index) => {
      ver.js;
      const checkboxId = `checkbox${index}`;
      const extensionsHTML = `
        <div class="extensions">
          <div class="logoTitle">
            <img
              class="extensionsLogo"
              src="${extension.logo}"
              alt="logo"
            />
            <div>
              <h4 class="extensionsTitle">${extension.name}</h4>
              <p class="extensionsDescription">${extension.description}</p>
            </div>
          </div>
          <div class="extensionsButton">
            <button class="extensionsRemove">Remove</button>
            <div class="buttonOnOff">
              <input type="checkbox" id="${checkboxId}" class="extensionsToggleActive" ${
        extension.isActive ? "checked" : ""
      }></input>
              <label for="${checkboxId}" class="pillLabel">
                <div class="buttonCircle"></div>
              </label>  
            </div>
          </div>
        </div>
      `;
      container.insertAdjacentHTML("beforeend", extensionsHTML);
    });
  });

filterButton.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");
    applyFilter(filter);
  });
});

function applyFilter(filter) {
  const extensions = document.querySelectorAll(".extensions");
  extensions.forEach((extension) => {
    const isActive = extension.querySelector(".extensionsToggleActive").checked;
    if (filter === "all") {
      extension.style.display = "flex";
    } else if (filter === "active" && isActive) {
      extension.style.display = "flex";
    } else if (filter === "inactive" && !isActive) {
      extension.style.display = "flex";
    } else {
      extension.style.display = "none";
    }
  });
}
