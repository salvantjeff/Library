import generatePalette from "./generatePalette";
import Book from "./Book";
import printBooksInLibrary from './printBooksInLibrary';
import handleCardClick from './handleCardClick';
import addBookToLibrary from './addBookToLibrary';
import { isEmpty, checkValidity, validateForm} from "./validators";
import { addMessage, removeMessage } from "./messages";
import initPageLoad from './pageLoad';
initPageLoad();
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAFFBySECU6f7rNcFTYAq9DcKbRi6qkAPY",
  authDomain: "library-app-2919e.firebaseapp.com",
  projectId: "library-app-2919e",
  storageBucket: "library-app-2919e.appspot.com",
  messagingSenderId: "734345502110",
  appId: "1:734345502110:web:c054bf7d52153e329d8a8f"
};

const app = initializeApp(firebaseConfig);

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

inputs.forEach(input => {
  return input.addEventListener(
    'input', 
    validateForm.bind(
      input,
      addMessage, 
      removeMessage, 
      titleError, 
      authorError, 
      pagesError
    )
  );
});

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
    cardsBox,
    addMessage,
    removeMessage,
    inputs,
    titleError,
    authorError,
    pagesError
  );
});

cardsBox.addEventListener('click', (e) => {
  handleCardClick(
    e, 
    myLibrary, 
    cardsBox, 
    palettes, 
    lastPalette, 
    printBooksInLibrary,
    generatePalette
  );
});

// on page load - use local storage 
printBooksInLibrary(myLibrary, cardsBox);