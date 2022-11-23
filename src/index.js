import generatePalette from "./generatePalette";

let palettes = ['standard', 'avatar', 'percy', 'nature'];
let lastPalette;

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

const titleError = document.querySelector('[data-id="title"]');
const authorError = document.querySelector('[data-id="author"]');
const pagesError = document.querySelector('[data-id="pages"]');

inputs.forEach(input => input.addEventListener('keydown', ()=> isTyping = true));
inputs.forEach(input => input.addEventListener('keyup', hideText.bind(input)));

inputs.forEach(input => input.addEventListener('input', validateForm.bind(input)));

function validateForm () {
  const input = this;
  if (input.value.length === 0) {
    input.classList.add('invalid'); 
    addMessage(input)
  } else {
    input.classList.remove('invalid'); 
    removeMessage(input)
  }
}

function checkValidity() {
  if (inputs[0].className.includes('invalid') ||
  inputs[1].className.includes('invalid') ||
  inputs[2].className.includes('invalid')) {
    return false;
  }
  return true
}

function isEmpty() {
  inputs.forEach(input => {
    if (input.value.length === 0) {
      input.classList.add('invalid');
      addMessage(input)
    } else {
      input.classList.remove('invalid');
      removeMessage(input)
    }
  })
}

function addMessage(input) {
  let message = '';
  
  if (input.dataset.id === 'title') {
    message = 'please enter a valid book title';
    titleError.textContent = message;
  } else if (input.dataset.id === 'author') {
    message = 'please enter a valid author';
    authorError.textContent = message;
  } else if (input.dataset.id === 'pages') {
    message = 'please enter the total pages';
    pagesError.textContent = message;
  }
}

function removeMessage(input) {
  let message = '';
  
  if (input.dataset.id === 'title') {
    titleError.textContent = message;
  } else if (input.dataset.id === 'author') {
    authorError.textContent = message;
  } else if (input.dataset.id === 'pages') {
    pagesError.textContent = message;
  }
}

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

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.colorTheme = 'standard';
  }
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

  isEmpty();
  let validity = checkValidity();
  if (validity) {
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

function handleCardClick(e) {
    let button = e.target;
    let buttonIdx = parseInt(button.dataset.index);
    let updatedUserInputs = myLibrary[buttonIdx];
  
    if (button.className.includes('card-readButton')) {
      updatedUserInputs.read = !updatedUserInputs.read;
      localStorage.setItem('libraryBooks', JSON.stringify(myLibrary));
      printBooksInLibrary(myLibrary, cardsBox);
    } 
  
    if (button.className.includes('card-colorButton')) {
      updatedUserInputs.colorTheme = generatePalette(palettes, lastPalette);
      localStorage.setItem('libraryBooks', JSON.stringify(myLibrary));
      printBooksInLibrary(myLibrary, cardsBox);
    } 
  
    if (button.className.includes('card-removeButton')) {
      myLibrary.splice(buttonIdx, 1);
      localStorage.setItem('libraryBooks', JSON.stringify(myLibrary));
      printBooksInLibrary(myLibrary, cardsBox);
    } 
}

submitBook.addEventListener('click', addBookToLibrary);
cardsBox.addEventListener('click', handleCardClick);
// on page load - use local storage 
printBooksInLibrary(myLibrary, cardsBox);