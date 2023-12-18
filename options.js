
const activeCellElement = document.querySelector("#active-cell");

const defaultProperties = {
    fontSize: 16,
    color:"#000",
    textAlign:"left",
    backgroundColor:"fff"
}

function onCellFocus(event){
    activeCellElement.innerText = event.target.id;
}
function onChangeFontSize(){

}