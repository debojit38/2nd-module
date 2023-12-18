let columns = 26;
let rows = 100;

const headerContainer = document.querySelector(".header");
const serialNumberContainer = document.querySelector(".sno");
const mainContainer = document.querySelector(".main");

function createHeaderCells(){
for(let i = 0;i<=columns;i++){
    const headerCell = document.createElement("div");
    headerCell.className = "header-cell cell";
    if(i !==0){
        headerCell.innerText= String.fromCharCode(64+i);
    }
   headerContainer.appendChild(headerCell)
}
}
createHeaderCells();

function createSerialNumberCells(){
for(let i = 1;i<= rows;i++){
    const snoCell = document.createElement("div");
    snoCell.className = "sno-cell cell";
    snoCell.innerText = i;
    serialNumberContainer.appendChild(snoCell);

}


}
createSerialNumberCells();

function createRow(){
    const row = document.createElement("div");
    for(let i = 1;i<= columns;i++){
    
        const cell = document.createElement("div");
        cell.className = "main-cell cell";
        cell.contentEditable = true;

        row.className = "row";
        row.appendChild(cell);
       cell.id = String.fromCharCode(64+i) + rowNumber;

       cell.addEventListener("focus",onCellFocus);
    }
    mainContainer.appendChild(row);
}

function buildMainSection(){
    //loop for 100 times

    for(let i = 0;i<=rows;i++){
        createRow(i);
    }
}
buildMainSection();