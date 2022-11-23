function addBookToLibrary(
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
    ) {
    e.preventDefault();
  
    let userInputs = allInputsArray.map(input => {
      if (input.type === 'checkbox') {
        return input.checked;
      } else {
        return input.value;
      }
    });
  
    isEmpty(inputs, addMessage, removeMessage, titleError, authorError, pagesError);
    let validity = checkValidity(inputs);
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
};

export default addBookToLibrary;