document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.querySelector(".add-btn"); // Seleciona o botão de adicionar
  const textItemInput = document.querySelector(".text-item"); // Seleciona o campo de texto
  const checklist = document.getElementById("checklist"); // Seleciona a área do checklist onde os itens serão adicionados

  addButton.addEventListener("click", function () {
    const text = textItemInput.value.trim(); // Obtém o texto do input e remove espaços extras

    // Verifica se o texto não está vazio
    if (text !== "") {
      // Cria o checkbox para o novo item
      const newCheckbox = document.createElement("input");
      newCheckbox.type = "checkbox";
      newCheckbox.name = "r";
      newCheckbox.value = Date.now(); // Utiliza o timestamp para o valor do checkbox (único)

      // Gera um id único para o checkbox
      const newId = `item-${Date.now()}`;
      newCheckbox.id = newId;

      // Cria o label para o novo item
      const newLabel = document.createElement("label");
      newLabel.setAttribute("for", newId); // O label faz referência ao id do checkbox
      newLabel.textContent = text; // O texto do novo item será o valor inserido

      // Adiciona o checkbox e o label ao novo item na div#checklist
      checklist.appendChild(newCheckbox);
      checklist.appendChild(newLabel);

      // Limpa o campo de texto após adicionar o item
      textItemInput.value = "";
    }
  });
});
