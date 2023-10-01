const container = document.querySelector("#container");

let divCount = 0;

function createDivGrid() {
    for (let i = 0;i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const div = document.createElement("div");
            div.classList.add("square");
            div.id = `div${i}_${j}`;
            container.appendChild(div);
            divCount++;
        };
    };
}

createDivGrid();