//-----------------------GENERATE COLOR PALeTTES-----------------------

let palettes = ['standard', 'avatar', 'percy', 'nature'];
let lastPalette;
function generatePalette(palettesArr) {
  let idx = Math.floor(Math.random() * palettesArr.length);
  const chosenPalette = palettesArr[idx];
  if (lastPalette === chosenPalette) {
    return generatePalette(palettesArr);
  }
  lastPalette = chosenPalette;
  return chosenPalette;
}

// ----------------------POP UP FORM-------------------------------
const modal = document.querySelector('dialog');
const showForm = document.querySelector('.add-book-header');
const labels = document.querySelectorAll('.plc-holder');
const inputs = document.querySelectorAll('.input-box input');
let isTyping = false;

function hideText(){
    if (!isTyping) return
    const currentInput = this;
    labels.forEach(label => {
      if (label.dataset.id === currentInput.dataset.id) {
        label.classList.add('selected');
        if (currentInput.value === '') {
          label.classList.remove('selected');
        }
      }
    });
}

showForm.addEventListener('click', () => {
    modal.showModal();
});

inputs.forEach(input => input.addEventListener('keydown', ()=> isTyping = true));
inputs.forEach(input => input.addEventListener('keyup', hideText));

modal.addEventListener('click', (e) => {
    if (e.target.dataset.id === 'popup') {
        modal.close();
    }
});

//------------------------CARD FUNCTIONALITY-----------------------------
// Define vars and constants
const theForm = document.getElementById('form');
const submitBook = document.getElementById('addBook');
const allInputs = document.querySelectorAll('input');
let allInputsArray = [...allInputs];
const cardsBox = document.querySelector('.cards');
let myLibrary = JSON.parse(localStorage.getItem('libraryBooks')) || [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.colorTheme = 'standard';
}

function addBookToLibrary(e) {
    e.preventDefault();
  
    let userInputs = allInputsArray.map(input => {
      if (input.type === 'checkbox') {
        return input.checked;
      } else {
        return input.value;
      }
    });
  
    let newBookInputs = new Book(userInputs[0], userInputs[1], userInputs[2], userInputs[3]);
    myLibrary.push(newBookInputs);
  
    modal.close();
    theForm.reset();
    labels.forEach(label => {
      label.classList.remove('selected');
    });
  
    printBooksInLibrary(myLibrary, cardsBox);
    localStorage.setItem('libraryBooks', JSON.stringify(myLibrary));
}