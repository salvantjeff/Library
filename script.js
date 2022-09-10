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

function printBooksInLibrary(bookList = [], container) {
    container.innerHTML = bookList.map((book, i) => {
      let readStatus  = book.read === true ? 'Read' : 'Not read';
      return `
        <div data-cardIndex="${i}" class="card ${book.colorTheme} card${i} numberID" >
          <div class="card-wrapper ${book.colorTheme}">
            <div class="card-details ${book.colorTheme}">
              <h3 class="card-title">${book.title}</h3>
              <p class="card-author">By ${book.author}</p>
              <p class="card-pages">${book.pages} pages</p>
            </div>
          
            <div class="card-tags">
              <button data-index="${i}" class="card-readButton ${book.read}">${readStatus}</button>
              <button data-index="${i}" class="card-colorButton">color</button>
            </div>
            <button data-index="${i}" class="card-removeButton">Remove</button>
          </div>
        </div>
      `;
    }).join('');
}