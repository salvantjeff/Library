const createBookArea = () => {
    const bookArea = document.createElement('div');
    bookArea.classList.add('add-book-area');

    const button = document.createElement('h2');
    button.classList.add('add-book-header');
    button.textContent = '+ Add book';

    bookArea.appendChild(button);
    return bookArea;
};

const createCards = () => {
    const cards = document.createElement('div');
    cards.classList.add('cards');
    return cards;
};

const Main = () => {
    const main = document.createElement('div');
    main.classList.add('container');
    main.append(createBookArea());
    main.append(createCards());
    return main;
};

export default Main;
