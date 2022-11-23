function handleCardClick(
    e,
    myLibrary, 
    cardsBox, 
    palettes, 
    lastPalette
    ) {
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
};

export default handleCardClick;