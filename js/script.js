const mainContainer = document.querySelector(".main");
const resetButton = document.querySelector("button");

resetButton.addEventListener("click", () => {
    let newGridSize = prompt("Please enter grid size:");
    newGridSize = Math.min(100,newGridSize);
    initalizeGrid(+newGridSize);
})


initalizeGrid(16);



function initalizeGrid(gridSize) {
    let allGridDivs = document.querySelectorAll(".grid");

    allGridDivs.forEach( (gridDiv) => gridDiv.remove());

    for (let i = 0; i < gridSize; i++) {
        let rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        rowDiv.classList.add("grid");
        for (let j = 0; j < gridSize; j++) {
            let cellDiv = document.createElement("div");
            cellDiv.classList.add("cell");
            cellDiv.classList.add("grid");
            // cellDiv.textContent = "cell";
            cellDiv.addEventListener("mouseenter", function () { this.classList.add("selected"); });
            //cellDiv.addEventListener("mouseleave", function() { this.classList.remove("selected"); });
            rowDiv.appendChild(cellDiv);
        }
        mainContainer.appendChild(rowDiv);
    }
}