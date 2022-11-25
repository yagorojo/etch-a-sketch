function paint(e) {
  if (this.style.backgroundColor === 'black') 
    this.style.backgroundColor = 'white';
  else
    this.style.backgroundColor = 'black';
}

function createGrid(input = 16) {
  let grid = document.querySelector('.grid');
  grid.innerHTML = '';
  grid.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${input}, 1fr)`;


  for (let i = 0; i < input**2; i++) {
    let square = document.createElement('div');
    square.addEventListener('click', paint);

    grid.appendChild(square);
  }
}

function inputChange(e) {
  size.textContent = `${this.value}x${this.value}`;
  createGrid(this.value);
}

let size = document.querySelector('p');
let input = document.querySelector('input');

input.addEventListener('change', inputChange);

createGrid();
