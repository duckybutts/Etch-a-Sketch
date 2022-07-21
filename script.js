//Create a webpage with a 16x16 grid of square divs
let size = 16;
let container = document.querySelector(".container");

let createGrid = (theSize) => {
  // have to do a for loop inside of a for loop. One loop to create the row divs and another to create the boxes that will go inside of the row of divs.
  for (let i = 0; i < theSize; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    // this is the inner loop which creates the boxes for the row
    for (let j = 0; j < theSize; j++) {
      let rowBox = document.createElement("div");
      rowBox.classList.add("rowBox");
      row.appendChild(rowBox); //puts it inside of the row
      //This code will let us adjust the size of the boxes according to the size of the container
      let widthAndHeight = 960 / theSize;
      rowBox.style.width = `${widthAndHeight}px`;
      rowBox.style.height = `${widthAndHeight}px`;
      //add listener to change background color
      rowBox.addEventListener("mouseenter", function () {
        rowBox.style.backgroundColor = "black";
      });
    }
    container.appendChild(row);
  }
};

createGrid(size);
