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
};

export default printBooksInLibrary;