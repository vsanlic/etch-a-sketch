const body = document.querySelector("body");
const container = document.querySelector(".container");
const input = document.querySelector("input");
const modify = document.querySelector(".modify-number-squares");

function generateDefaultGrid() {
    for (let i = 0; i < 16; i++) {
      row = document.createElement("div");
      container.appendChild(row);
      row.className = "row";
      for (let i = 0; i < 16; i++) {
        square = document.createElement("div");
        row.appendChild(square);
        square.className = "square";
      }
    }
}

function addMouseEvent() {
  const allSquares = document.querySelectorAll(".square");
  for (let i = 0; i < allSquares.length; i++) {
    allSquares[i].addEventListener("mouseover", () => {
      allSquares[i].className = "blackSquare";
    });
  }
}

function generateInputGrid(input) {
  for (let i = 0; i < input; i++) {
    row = document.createElement("div");
    container.appendChild(row);
    row.className = "row";
    for (let i = 0; i < input; i++) {
      square = document.createElement("div");
      row.appendChild(square);
      square.className = "square";
    }
  }
}

generateDefaultGrid();
addMouseEvent();

modify.addEventListener("click", () => {
  const newNumber = input.value;
  input.value = "";
  document.querySelectorAll(".error").forEach(e => e.remove());

  if (newNumber < 2 || newNumber > 100) {
    const error = document.createElement("p");
    error.classList.add("error");
    error.textContent = "Value must be between 2 and 100!";
    body.appendChild(error);
  } else {
    document.querySelectorAll(".square").forEach(e => e.remove());
    document.querySelectorAll(".row").forEach(e => e.remove());
    document.querySelectorAll(".blackSquare").forEach(e => e.remove());
    generateInputGrid(newNumber);
    addMouseEvent();
  }
})