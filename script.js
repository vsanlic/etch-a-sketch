const body = document.querySelector("body");
const container = document.querySelector(".container");
const input = document.querySelector("input");
const modify = document.querySelector(".modify-number-squares");
const randomSquares = document.querySelector(".random-squares");
const blackSquares = document.querySelector(".black-squares");

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

function addDefaultMouseEvent() {
  const allSquares = document.querySelectorAll(".square");
  for (let i = 0; i < allSquares.length; i++) {
    allSquares[i].addEventListener("mouseover", () => {
      allSquares[i].style.backgroundColor = "black";
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

function randomColor() {
  let o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function addRandomMouseEvent() {
  const allSquares = document.querySelectorAll(".square");
  for (let i = 0; i < allSquares.length; i++) {
    allSquares[i].addEventListener("mouseover", () => {
      allSquares[i].style.backgroundColor = randomColor();
    });
  }
}

generateDefaultGrid();
addDefaultMouseEvent();

modify.addEventListener("click", () => {
  const newNumber = input.value;
  input.value = "";
  document.querySelectorAll(".error").forEach(e => e.remove());

  if (newNumber < 2 || newNumber > 100) {
    const error = document.createElement("p");
    error.classList.add("error");
    error.style.backgroundColor = "red";
    error.style.color = "white";
    error.style.padding = "5px";
    error.style.border = "3px solid red";
    error.style.borderRadius = "8px";
    error.textContent = "Value must be between 2 and 100!";
    body.appendChild(error);
  } else {
    document.querySelectorAll(".square").forEach(e => e.remove());
    document.querySelectorAll(".row").forEach(e => e.remove());
    generateInputGrid(newNumber);
    addDefaultMouseEvent();
  }
})

randomSquares.addEventListener("click", () => {
  addRandomMouseEvent();
})

blackSquares.addEventListener("click", () => {
  addDefaultMouseEvent();
})