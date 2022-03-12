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
            cellDiv.setAttribute("data-shade",255);
            cellDiv.addEventListener("mouseenter", function () {
                //this.classList.add("selected");
                let shade = this.getAttribute("data-shade");
                shade = shade / 1.1;
                this.style.backgroundColor = `rgb(${shade},${shade},${shade})`;
                this.setAttribute("data-shade",shade);
                
            });
            rowDiv.appendChild(cellDiv);
        }
        mainContainer.appendChild(rowDiv);
    }
}