import generatePalette from "./generatePalette";
import Book from "./Book";
import printBooksInLibrary from './printBooksInLibrary';
import handleCardClick from './handleCardClick';
import addBookToLibrary from './addBookToLibrary';

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

submitBook.addEventListener('click', (e) => {
  addBookToLibrary(
    e,
    Book,
    allInputsArray,
    isEmpty,
    checkValidity,
    myLibrary,
    modal,
    theForm,
    labels,
    printBooksInLibrary,
    cardsBox
  );
});

cardsBox.addEventListener('click', (e) => {
  handleCardClick(e, myLibrary, cardsBox, palettes, lastPalette);
});

// on page load - use local storage 
printBooksInLibrary(myLibrary, cardsBox);