function isEmpty(inputs, addMessage, removeMessage, titleError, authorError, pagesError) {
    inputs.forEach(input => {
      if (input.value.length === 0) {
        input.classList.add('invalid');
        addMessage(input, titleError, authorError, pagesError);
      } else {
        input.classList.remove('invalid');
        removeMessage(input, titleError, authorError, pagesError);
      }
    });
};

function checkValidity(inputs) {
    if (inputs[0].className.includes('invalid') ||
    inputs[1].className.includes('invalid') ||
    inputs[2].className.includes('invalid')) {
      return false;
    }
    return true;
};

function validateForm (addMessage, removeMessage, input, titleError, authorError, pagesError) {
    const input = this;
    if (input.value.length === 0) {
      input.classList.add('invalid'); 
      addMessage(input, titleError, authorError, pagesError);
    } else {
      input.classList.remove('invalid'); 
      removeMessage(input, titleError, authorError, pagesError);
    }
};

export { isEmpty, checkValidity, validateForm };


