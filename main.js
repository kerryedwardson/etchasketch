const container = document.querySelector("#container");
const btn = document.querySelector(".btn");
let size;
let randomColor = '#'+Math.floor(Math.random()*16777215).toString();

function makeGrid(grid) {
  container.style.gridTemplateColumns = `repeat(${grid}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${grid}, 1fr)`;
  for (let i = 0; i < grid * grid; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.id = 'cell' + i
    container.appendChild(cell);
  }
  document.querySelectorAll(".cell").forEach((item) => {
    item.addEventListener(
      "mouseover",
      (e) => (e.target.style.backgroundColor = 'black')
    );
  });
}

makeGrid(16);

btn.addEventListener("click", (e) => {
  let userPrompt = prompt("Make your grid (choose a number)");
  size = parseInt(userPrompt);
  if (userPrompt > 100) {
    alert("Please choose something smaller");
  } else {
    container.replaceChildren();
    makeGrid(size);
  }
});
