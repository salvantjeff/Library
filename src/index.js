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
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFFBySECU6f7rNcFTYAq9DcKbRi6qkAPY",
  authDomain: "library-app-2919e.firebaseapp.com",
  projectId: "library-app-2919e",
  storageBucket: "library-app-2919e.appspot.com",
  messagingSenderId: "734345502110",
  appId: "1:734345502110:web:c054bf7d52153e329d8a8f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const newUserEmail = document.getElementById('sign-up_email');
const newUserPassword = document.getElementById('sign-up_pwd');
const createAccountButton = document.querySelector('.sign-up_button');
const signUpForm = document.querySelector('.sign-up_form');

const userEmail = document.getElementById('sign-in_email');
const userPassword = document.getElementById('sign-in_pwd');
const accountButton = document.querySelector('.sign-in_button');
const signInForm = document.querySelector('.sign-in_form');

const signInLink = document.querySelector('.sign-in_link');
const signUpLink = document.querySelector('.sign-up_link');
const signInPage = document.querySelector('.sign-in_page');
const signUpPage = document.querySelector('.sign-up_page');
const landingPage = document.querySelector('.landing-page');

async function handleCreateAccount(e) {
  e.preventDefault();
  //validate form
  if (newUserPassword.value.length < 6) {
    //display error: password must be greater than or equal to 6 chars
    return;
  }

  try {
    //create new user
    const userCredentials = await createUserWithEmailAndPassword(auth, newUserEmail.value, newUserPassword.value);
    //signedIn
    const user = userCredentials.user;
    signUpForm.reset();
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  }
}

async function handleSignIn (e) {
  e.preventDefault();
  //validate form
  if (userPassword.value.length < 6) {
    //display error: password must be greater than or equal to 6 chars
    return;
  };

  try {
    const userCredentials = await signInWithEmailAndPassword(auth, userEmail.value, userPassword.value);
    //Signed in
    console.log('yay! you have signed in!');
    const user = userCredentials.user;
    signInForm.reset();
    signUpPage.classList.add('hide');
    signInPage.classList.add('hide');
    landingPage.classList.add('hide');
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  }
}

signUpForm.addEventListener('submit', handleCreateAccount);
signInForm.addEventListener('submit', handleSignIn);

signInLink.addEventListener('click', () => {
  signInPage.classList.remove('hide');
  signUpPage.classList.add('hide');
});

signUpLink.addEventListener('click', () => {
  signInPage.classList.add('hide');
  signUpPage.classList.remove('hide');
});

async function handleLogOut() {
  try {
    await signOut(auth);
    console.log('sign-out was successful');
    landingPage.classList.remove('hide');
    signInPage.classList.remove('hide');
  } catch (error) {
    console.log(error, 'sorry an error occurred while signing out');
  }
};

const logOutButton = document.querySelector('.log-out_button');
logOutButton.addEventListener('click', () => {
  handleLogOut();
});

let palettes = ['standard', 'avatar', 'percy', 'nature'];
let lastPalette;

// ----------------------POP UP FORM-------------------------------
const modal = document.querySelector('dialog');
const showForm = document.querySelector('.add-book-header');
const labels = document.querySelectorAll('.plc-holder');
const inputs = document.querySelectorAll('.input-box input');
let isTyping = false;

function hideText() {
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
window.addEventListener('click', (e) => {
  console.log(e.target);
})
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