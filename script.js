let container = document.querySelector(".container");
let btnCon = document.querySelector(".button-container");
let blackBtn = document.querySelector(".black");
let whiteBtn = document.querySelector(".white");
let rainbowBtn = document.querySelector(".rainbow");
let resetBtn = document.querySelector(".reset");
let gridLines = document.querySelector(".gridlines");

function makeCanvas(column, rows) {
  for (let i = 0; i < column * rows; i++) {
    let pixels = document.createElement("div");
    pixels.style.border = "1px solid black ";
    pixels.style.backgroundColor = "white ";

    container.style.gridTemplateColumns = `repeat(${column},1fr)`;
    // Here we are creating a grid with (#of columns) columns that each take up one fraction of the container (equal width).
    container.style.gridTemplateRows = `repeat(${rows},1fr)`;
    //Here we are creating the rows each of which will take up 1 fraction of the container.
    container.appendChild(pixels).classList.add("pixel");
  }
}

makeCanvas(16, 16);

function white() {
  let pixels = container.querySelectorAll(".pixel");
  whiteBtn.textContent = "Eraser";
  whiteBtn.addEventListener("click", function () {
    pixels.forEach((pixel) =>
      pixel.addEventListener("mouseover", function () {
        pixel.style.background = "white";
      })
    );
  });
}

function black() {
  let pixels = container.querySelectorAll(".pixel");
  blackBtn.textContent = "Black";
  blackBtn.addEventListener("click", function () {
    pixels.forEach((pixel) =>
      pixel.addEventListener("mouseover", function () {
        pixel.style.background = "black";
      })
    );
  });
}

function rainbow() {
  generatePastelColor = () => {
    //Stack overflow. Generates random pastel
    let R = Math.floor(Math.random() * 127 + 127);
    let G = Math.floor(Math.random() * 127 + 127);
    let B = Math.floor(Math.random() * 127 + 127);

    let rgb = (R << 16) + (G << 8) + B;
    return `#${rgb.toString(16)}`;
  };

  let pixels = container.querySelectorAll(".pixel");
  rainbowBtn.textContent = "Rainbow";
  rainbowBtn.addEventListener("click", function () {
    pixels.forEach((pixel) =>
      pixel.addEventListener("mouseover", function () {
        let color = generatePastelColor();
        pixel.style.background = `${color}`;
      })
    );
  });
}

white();
black();
rainbow();
resize();

function reset() {
  let pixels = container.querySelectorAll(".pixel");
  pixels.forEach((pixel) => pixel.remove());
}

function resize() {
  resetBtn.textContent = "Reset grid";
  resetBtn.addEventListener("click", function () {
    let size = prompt("What size do you want your grid?");
    if (size === null || size < 2 || size > 100) {
      size = prompt("Input a size between 2 and 100");
    } else {
      reset();
      makeCanvas(size, size);
      white();
      black();
      rainbow();
    }
  });
}
