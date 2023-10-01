document.addEventListener("DOMContentLoaded", function () {

const container = document.querySelector("#container");

let divCount = 0;

const squares = document.querySelectorAll(".square");

function createDivGrid(num) {
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

createDivGrid(25);

let isMouseDown = false;


function hoverEffect() {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseup", () => {
            isMouseDown = false;
        });
        square.addEventListener("mousedown", (event) => {
            isMouseDown = true;
            square.style.backgroundColor = "black";
        });
        square.addEventListener("mouseover", () => {
            if (isMouseDown && square.style.backgroundColor !== "black") {
                square.style.backgroundColor = "black";
            };
        });
    });
};

hoverEffect();

container.addEventListener("mouseleave", () => {
    isMouseDown = false;
});

document.addEventListener("mouseup", () => {
    isMouseDown = false;
});

const header = document.querySelector(".header");

const gridButton = document.createElement("button");
gridButton.classList.add("gridButton")
gridButton.textContent = "Input grid size";

header.appendChild(gridButton);
});