function addMessage(input, titleError, authorError, pagesError) {
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
};
  
function removeMessage(input, titleError, authorError, pagesError) {
    let message = '';
    if (input.dataset.id === 'title') {
      titleError.textContent = message;
    } else if (input.dataset.id === 'author') {
      authorError.textContent = message;
    } else if (input.dataset.id === 'pages') {
      pagesError.textContent = message;
    }
};

export { addMessage, removeMessage };