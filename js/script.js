const mainContainer = document.querySelector(".main");
const resetButton = document.querySelector("button");

resetButton.addEventListener("click", () => {
    let newGridSize = prompt("Please enter grid size:");
    newGridSize = Math.min(100,newGridSize);
    initalizeGrid(+newGridSize);
})


initalizeGrid(16);

let lastX;
let lastY;



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
            cellDiv.setAttribute("data-x",rowDiv.childNodes.length ?? 0);
            cellDiv.setAttribute("data-y",mainContainer.childNodes.length ?? 0);
            cellDiv.setAttribute("data-shade",255);
            cellDiv.addEventListener("mouseenter", function () {
                // let shade = this.getAttribute("data-shade");
                // shade = shade / 1.1;
                // this.style.backgroundColor = `rgb(${shade},${shade},${shade})`;
                // this.setAttribute("data-shade",shade);
                let x = this.getAttribute("data-x");
                let y = this.getAttribute("data-y");
                fillCell(x,y);
                if (lastX != undefined && lastX != 0 && lastY != undefined && lastY != 0) {
                    console.log(Math.max(Math.abs(x-lastX),Math.abs(y-lastY)));
                    if (Math.max(Math.abs(x-lastX),Math.abs(y-lastY)) > 1) {
                        drawLine(+lastX,+lastY,+x,+y);
                    }
                }
                lastX = x;
                lastY = y;
                console.log("lastX = " + lastX);
                console.log("lastY = " + lastY);
            });
            rowDiv.appendChild(cellDiv);
        }
        mainContainer.appendChild(rowDiv);
    }
}

function fillCell(x,y) {
    if (y >= mainContainer.childNodes.length) { return; }
    let rowDiv = mainContainer.childNodes[y];
    if (rowDiv == undefined) {
        debugger;
    }
    if (x >= rowDiv.childNodes.length) {return; }
    let cellDiv = rowDiv.childNodes[x];
    cellDiv.classList.add("selected");
}

function drawLine(x1,y1,x2,y2) {
    //Normalize x and y differences so that the larger is 1 or -1
    let deltaX = x1-x2;
    let deltaY = y1-y2;
    let max = Math.max(Math.abs(deltaX),Math.abs(deltaY));

    if (max > 10) {
        debugger;
    }

    deltaX /= max;
    deltaY /= max;


    for (let i = 0; i < max; i++) {
        x2 += deltaX;
        y2 += deltaY;

        fillCell(Math.round(x2),Math.round(y2));
    }
}


