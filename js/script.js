const mainContainer = document.querySelector(".main");

for (let i = 0; i < 16; i++) {
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    for (let j = 0; j < 16; j++) {
        let cellDiv = document.createElement("div");
        cellDiv.classList.add("cell");
        cellDiv.textContent = "cell";
        cellDiv.addEventListener("mouseenter", function() { this.classList.add("selected"); });
        //cellDiv.addEventListener("mouseleave", function() { this.classList.remove("selected"); });
        rowDiv.appendChild(cellDiv);
    }
    mainContainer.appendChild(rowDiv);
}