document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.querySelector(".add-btn");
  const textItemInput = document.querySelector(".text-item");
  const checklist = document.getElementById("checklist");

  addButton.addEventListener("click", function () {
    const text = textItemInput.value.trim();

    if (text !== "") {
      const newCheckbox = document.createElement("input");
      newCheckbox.type = "checkbox";
      newCheckbox.name = "r";
      newCheckbox.value = Date.now();

      const newId = `item-${Date.now()}`;
      newCheckbox.id = newId;

      const newLabel = document.createElement("label");
      newLabel.setAttribute("for", newId);
      newLabel.textContent = text;

      checklist.appendChild(newCheckbox);
      checklist.appendChild(newLabel);

      textItemInput.value = "";
    }
  });
});
