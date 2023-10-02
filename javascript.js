document.addEventListener("DOMContentLoaded", function () {

const container = document.querySelector("#container");

let divCount = 0;

const squares = document.querySelectorAll(".square");

let isMouseDown = false;



container.addEventListener("mousedown", (event) => {
    if (event.target.classList.contains("square")) {
        isMouseDown = true;
        event.target.style.backgroundColor = "black";
    }
});

container.addEventListener("mouseover", (event) => {
    if (isMouseDown && event.target.classList.contains("square") && event.target.style.backgroundColor !== "black") {
        event.target.style.backgroundColor = "black";
    }
});

container.addEventListener("mouseleave", () => {
    isMouseDown = false;
});

document.addEventListener("mouseup", () => {
    isMouseDown = false;
});



function createDivGrid(num = 16) {
    const removeExistingSquares = document.querySelectorAll(".square");
    removeExistingSquares.forEach((square) => {
        square.remove();
    });

    for (let i = 0;i < num; i++) {
        for (let j = 0; j < num; j++) {
            const div = document.createElement("div");
            div.classList.add("square");
            div.id = `div${i}_${j}`;
            container.appendChild(div);
            divCount++;

            const cellSize = `calc(100% / ${num})`;
            div.style.width = cellSize;
            div.style.height = cellSize;
        };
    }; 
}

createDivGrid();

const buttons = document.querySelector(".buttons");

const header = document.querySelector(".header");

const gridInputButton = document.createElement("button");
gridInputButton.textContent = "Update grid";

buttons.appendChild(gridInputButton);

const gridInput = document.createElement("input");
gridInput.classList.add("gridInput")
gridInput.value = "";

buttons.appendChild(gridInput);

const clearButton = document.createElement("button");
clearButton.textContent = "Clear";

buttons.appendChild(clearButton);

clearButton.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
      square.style.backgroundColor = "white";
    });
  });

gridInputButton.addEventListener("click", () => {
    const gridSize = parseInt(gridInput.value);

        if(gridInput.value >= 100) {
            alert("Noooooooo... I might explodeeeeeee!! Chose a lower number please");
        }else if (!isNaN(gridSize)) {
            createDivGrid(gridSize);
        }  else {
            alert("please enter a valid number");
        };
    });

});

